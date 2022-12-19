import { Transport } from '@nestjs/microservices/enums';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ADD_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      }

    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
