import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /* Remove atribute that not exist in my Dto. */
      whitelist: true,
      /* Show error when get data that not exist in my Dto.*/
      forbidNonWhitelisted: true,
    }),
  );

  /* Swagger documentation. */
  const config = new DocumentBuilder()
    .setTitle('Swrong - Feedbacks and more')
    .setDescription("The Swrong's API")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  /* CORS. */
  app.enableCors(); // ! Make better conection

  await app.listen(3000);
}
bootstrap();
