import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow CORS (important for frontend apps)
  app.enableCors();

  // Optional: Set a global prefix if needed
  // app.setGlobalPrefix('api'); // Uncomment if necessary

  const port = process.env.PORT || 3000;
  await app.listen(port);

  // Log confirmation for debugging
  Logger.log(`🚀 Server running on: http://localhost:${port}`, 'Bootstrap');
}

bootstrap();