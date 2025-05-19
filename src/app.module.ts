import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FerderationModule } from './modules/federation/federation.module';

@Module({
  imports: [FerderationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
