import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const PORT = parseInt(config.get<string>('PORT'), 10);
  
  await app.listen(PORT).then(() => {
    console.log(`🚀 Api gateway escuchando en el puerto ${PORT}`, 'GATEWAY');
  });
}
bootstrap();
