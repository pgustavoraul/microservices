import { Controller, Get, Version } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ClienteService } from './services/cliente.service';

@Controller()
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) { }

    @Version('1')
    @Get('/clientes/list')
    async getClientes() {
        const data = await this.clienteService.getClientes();
        return data;
    }
}
