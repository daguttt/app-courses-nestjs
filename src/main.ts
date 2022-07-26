import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  // CORS
  // app.enableCors();

  // ENV
  console.log({ port: process.env.PORT });

  // Validations
  app.useGlobalPipes(new ValidationPipe());

  // Versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // File uploading limit
  app.use(json({ limit: '60mb' }));

  // OpenAPI - Swagger
  const config = new DocumentBuilder()
    .setTitle('Courses API Documentation')
    .addBearerAuth()
    .addTag('videos')
    .addTag('courses')
    .addTag('awards')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-api', app, document);

  await app.listen(3000);
}
bootstrap();
