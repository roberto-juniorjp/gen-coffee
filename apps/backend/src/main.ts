import { Logger, ValidationPipe } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app: NestApplication = await NestFactory.create(AppModule);

  setupSwagger(app);
  setupGlobalPipes(app);
  setupCors(app);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`);
}

function setupSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Gen Coffee API')
    .setDescription('Main API for the Gen Coffee API Project')
    .setVersion('1.0')
    .addTag('Products', 'Endpoints for managing products')
    .addTag('Categories', 'Endpoints for managing categories')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
}

function setupGlobalPipes(app) {
  app.useGlobalPipes(new ValidationPipe());
}

function setupCors(app) {
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
}

bootstrap();