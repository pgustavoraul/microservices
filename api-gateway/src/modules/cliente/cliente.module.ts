import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller'
import { ClienteService } from './services/cliente.service'
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
    imports: [],
    controllers: [ClienteController],
    providers: [
        {
            provide: 'MS_CLIENTE',
            useFactory: (config: ConfigService) => {
                return ClientProxyFactory.create({
                    transport: Transport.TCP,
                    options: {
                        host: config.get<string>('MS_CLIENTE_HOST') || 'localhost',
                        port: config.get<number>('MS_CLIENTE_PORT') || 8888,
                    },
                });
            },
            inject: [ConfigService],
        },
        ClienteService,
    ]
})
export class ClienteModule { }
