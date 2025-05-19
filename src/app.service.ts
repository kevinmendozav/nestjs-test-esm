import { Injectable } from '@nestjs/common';
import { createFederation, Federation, MemoryKvStore } from '@fedify/fedify';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
