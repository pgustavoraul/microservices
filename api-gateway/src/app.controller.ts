import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping-mscliente')
  pingServiceA() {
    return this.appService.pingMsCliente();
  }
}
