import { Controller, Get, ForbiddenException } from '@nestjs/common';

@Controller('debug-env')
export class DebugEnvController {
  @Get()
  getEnv() {
    // Optional: restrict access in production
    if (process.env.NODE_ENV === 'production') {
      throw new ForbiddenException('Access denied');
    }

    // Return specific keys or all environment variables
    return {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_SYNC_KEY: process.env.NEXT_PUBLIC_SYNC_KEY,
      TEMP: process.env.TEMP, // Windows TEMP directory
      // You can add other keys here as needed for debugging
    };

    // To return everything (not recommended for production):
    // return process.env;
  }
}
