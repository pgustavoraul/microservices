import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ConstantesConfig } from './config/constantes.config';
import databaseConfig from './config/database.config';
import Joi = require('joi');

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        config.get(ConstantesConfig.TYPEORM_CONFIG),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'local')
          .default('local'),
      }),
    }),
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
