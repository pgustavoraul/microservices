import { Controller, Get } from '@nestjs/common';
import { ClienteService } from './services/cliente.service';

@Controller()
export class ClienteController {
    constructor(private readonly appService: ClienteService) { }

    @Get('/ping-mscliente')
    pingServiceA() {
        return this.appService.pingMsCliente();
    }

    @Get('/clientes/list')
    getClientes() {
        return this.appService.getClientes();
    }
}
