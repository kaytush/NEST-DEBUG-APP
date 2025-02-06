import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors();

    // Use the Azure-assigned port
    const port = process.env.PORT || 3000;
    await app.listen(port);

    // Log success
    Logger.log(`🚀 Server running on: http://localhost:${port}`, 'Bootstrap');
  } catch (error) {
    Logger.error('❌ Error starting server:', error.stack, 'Bootstrap');
  }
}

bootstrap();
