import { Module } from '@nestjs/common';
import { FederationController } from './federation.controller.js';
import { FederationService } from './federation.service.js';
// import { UserModule } from '../user/user.module';
// import { NetworkModule } from '../network/network.module';

@Module({
  imports: [
    // UserModule,
    // NetworkModule
  ],
  controllers: [
    FederationController
  ],
  providers: [
    FederationService
  ],
  exports: [
    FederationService
  ]
})
export class FerderationModule {}
