
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class AppService {




  /**
   *
   */
  constructor(
    @Inject('ADD_SERVICE') private client: ClientProxy,
  ) { }

  public add(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}