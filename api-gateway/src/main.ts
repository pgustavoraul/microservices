import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import compression from 'compression';
import { initSwagger } from './app.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });

  initSwagger(app);

  const config = app.get(ConfigService);
  const PORT = parseInt(config.get<string>('PORT'), 10);
  app.use(compression());
  await app.listen(PORT).then(() => {
    console.log(`🚀 Api gateway escuchando en el puerto ${PORT}`, 'GATEWAY');
  });




}
bootstrap();
