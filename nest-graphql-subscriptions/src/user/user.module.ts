import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { UserEntity } from './entities/user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service';
import { PasswordService } from './auth/password/password.service';
import { JwtStrategyService } from './auth/jwt-strategy/jwt-strategy.service'

@Module({
  imports: [
    JwtModule.register({ secret: "helloxyz!" }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, PasswordService, JwtStrategyService]
})
export class UserModule { }
