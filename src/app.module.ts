import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FerderationModule } from './modules/federation/federation.module.js';

@Module({
  imports: [FerderationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
