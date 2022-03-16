import { map } from 'rxjs/operators';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ConstantesConfig } from 'src/config/constantes.config';
import { firstValueFrom } from 'rxjs';
import { manageErrors } from 'src/helper/manageErrors';

@Injectable()
export class ClienteService {
    private readonly msCliente: string;
    constructor(
        @Inject(ConstantesConfig.MS_CIENTE)
        private readonly clienteMSCliente: ClientProxy,
    ) {
        this.msCliente = ConstantesConfig.MS_CIENTE;
    }

    // constructor(
    //     @Inject('MS_CLIENTE') private readonly msCliente: ClientProxy,
    // ) { }


    async getClientes() {
        const pattern = { role: this.msCliente, cmd: this.getClientes.name };
        const payload = {};
        const data = await firstValueFrom(
            this.clienteMSCliente.send(pattern, payload),
        ).catch((err) => manageErrors(this.msCliente, err.error));
        return data;
    }
}
