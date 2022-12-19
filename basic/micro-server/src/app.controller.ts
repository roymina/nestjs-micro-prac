import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('add')
  add(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
