import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  /**
   *
   */
  constructor(private appService: AppService) {

  }

  @Get("add")
  async add() {
    this.logger.log("adding 1+4");
    return this.appService.add([1, 4]);
  }
}
