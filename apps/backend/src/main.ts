import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Set global prefix
  app.setGlobalPrefix('api');

  // Swagger setup
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Gen Coffee API')
    .setDescription('Main API for the Gen Coffee API Project')
    .setVersion('1.0')
    .addTag('Products', 'Endpoints for managing products')
    .addTag('Categories', 'Endpoints for managing categories')
    .addTag('Users', 'Endpoints for managing users')
    .addTag('Orders', 'Endpoints for managing orders')
    .addTag('Order Items', 'Endpoints for managing order items')
    .addBearerAuth()
    .build();
    
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  // Global pipes
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
  }));

  // Security middlewares
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));
  app.use(helmet({ frameguard: { action: 'deny' } }));

  // CORS configuration
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  // Start the application
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`);
}

bootstrap();