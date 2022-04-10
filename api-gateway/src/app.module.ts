import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi = require('joi');
import { ClienteModule } from './modules/cliente/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'local')
          .default('local'),
      }),
    }),
    ClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
