import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import Joi = require('joi');
import { ClienteModule } from './modules/cliente/cliente.module';
import { ConstantesConfig } from './config/constantes.config';
import graphqlConfig from './config/gql.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/schema.gql',
      sortSchema: true,
      playground: true,
      buildSchemaOptions: {
        dateScalarMode: 'isoDate',
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      //load: [graphqlConfig],
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
export class AppModule {}
