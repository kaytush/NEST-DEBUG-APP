import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DebugController } from './debug.controller';
import { DebugEnvModule } from './debug-env.module'; // Adjust the path as needed
import { DebugEnvController } from './debug-env.controller';

@Module({
  imports: [DebugEnvModule],
  controllers: [AppController, DebugController, DebugEnvController],
  providers: [AppService],
  })
export class AppModule {}


// , DebugController