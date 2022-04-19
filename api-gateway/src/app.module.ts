import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleAsyncOptions, GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import Joi = require('joi');
import { ClienteModule } from './modules/cliente/cliente.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          autoSchemaFile: 'src/graphql/schema.gql',
          sortSchema: true,
          playground: false,
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          buildSchemaOptions: {
            dateScalarMode: 'isoDate',
          },
        } as GqlModuleOptions;
      },
      inject: [ConfigService],
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
