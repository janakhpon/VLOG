import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { PubsubModule } from './pubsub/pubsub.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TodoModule,
    UserModule,
    PubsubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
