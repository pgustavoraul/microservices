import { Controller, Get } from '@nestjs/common';
import { ClienteService } from './services/cliente.service';

@Controller()
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Get('/clientes/list')
    async getClientes() {
        const data = await this.clienteService.getClientes();
        return data;
    }
}
