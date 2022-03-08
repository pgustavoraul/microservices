import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const PORT = parseInt(process.env.PORT) || 8888;
  const HOST = process.env.HOST || 'localhost';
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    logger: ['error', 'warn', 'debug', 'log'],
    options: {
      retryAttempts: 5,
      retryDelay: 3000,
      host: HOST,
      port: PORT,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen().then(() => {
    Logger.log(`🚀 MS-CLIENTE escuchando en el puerto ${PORT}`);
  });
}
bootstrap();
