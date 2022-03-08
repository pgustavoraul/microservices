import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClienteController } from './modules/cliente/cliente.controller';
import { ClienteService } from './modules/cliente/services/cliente.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS_CLIENTE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
    ]),
  ],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class AppModule {}
