import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong ms-cliente');
  }
  @MessagePattern({ cmd: 'clientes-list' })
  getClientes(_: any) {
    return of('Lista clientes');
  }
}
