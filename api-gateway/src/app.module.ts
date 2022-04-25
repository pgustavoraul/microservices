import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlModuleAsyncOptions, GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import Joi = require('joi');
import { ClienteModule } from './modules/cliente/cliente.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './modules/auth/users/users.module';
import { PermissionsModule } from './modules/auth/permissions/permissions.module';
import { RolesModule } from './modules/auth/roles/roles.module';
import { PersonsModule } from './modules/people/persons/persons.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstantesConfig } from './config/constantes.config';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) =>
    //     config.get(ConstantesConfig.TYPEORM_CONFIG),
    // }),
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
      envFilePath: `.env.${process.env.NODE_ENV || 'local'}`,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'local')
          .default('local'),
      }),
    }),
    ClienteModule,
    UsersModule,
    PermissionsModule,
    RolesModule,
    PersonsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
