import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Nest.js with Swagger')
    .setDescription('Swagger Example with Nest.js')
    .setVersion('1.0')
    .addTag('user')
    // add more tag here for example, .addTag('todo')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // setup the swagger module
  SwaggerModule.setup('api/v1/documentation', app, document);

  await app.listen(3001);
}
bootstrap();
