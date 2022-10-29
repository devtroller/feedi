import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
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

  await app.listen(3000);
}
bootstrap();
