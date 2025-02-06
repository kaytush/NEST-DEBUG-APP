import { Module } from '@nestjs/common';
import { DebugEnvController } from './debug-env.controller';

@Module({
  controllers: [DebugEnvController],
})
export class DebugEnvModule {}
