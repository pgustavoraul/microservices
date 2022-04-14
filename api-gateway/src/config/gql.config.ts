/**
 * @ Author: Anthony Loyaga
 * @ Create Time: 2022-02-15 13:57:44
 * @ Modified by: Anthony Loyaga
 * @ Modified time: 2022-04-14 10:41:25
 * @ Description:
 */

import { ApolloDriver } from '@nestjs/apollo';
import { registerAs } from '@nestjs/config';
import { GqlModuleOptions } from '@nestjs/graphql';

function gqlModuleOptions(): GqlModuleOptions {
  return {
    driver: ApolloDriver,
    autoSchemaFile: 'src/graphql/schema.gql',
    sortSchema: true,
    //playground: true,
    buildSchemaOptions: {
      dateScalarMode: 'isoDate',
    },
  };
}

export default registerAs('gql', () => ({
  config: gqlModuleOptions(),
}));
