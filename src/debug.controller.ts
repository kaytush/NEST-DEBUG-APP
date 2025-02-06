import { Controller, Get } from '@nestjs/common';

@Controller('debug')
export class DebugController {
  @Get('env')
  getEnvVariables() {
    return process.env;
  }
}