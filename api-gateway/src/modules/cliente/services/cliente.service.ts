import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class ClienteService {
    constructor(
        @Inject('MS_CLIENTE') private readonly msCliente: ClientProxy,
    ) { }

    pingMsCliente() {
        const startTs = Date.now();
        const pattern = { cmd: 'ping' };
        const payload = {};
        return this.msCliente
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message, duration: Date.now() - startTs })),
            );
    }

    getClientes() {
        const startTs = Date.now();
        const pattern = { cmd: 'clientes-list' };
        const payload = {};
        return this.msCliente
            .send<string>(pattern, payload)
            .pipe(
                map((message: string) => ({ message, duration: Date.now() - startTs })),
            );
    }
}
