 import { registerAs } from '@nestjs/config';
 import { TypeOrmModuleOptions } from '@nestjs/typeorm';

 function typeormModuleOptions(): TypeOrmModuleOptions {
   return {
     type: 'postgres',
     host: process.env.DATABASE_HOST,
     port: parseInt(process.env.DATABASE_PORT),
     username: process.env.DATABASE_USER,
     password: process.env.DATABASE_PASS,
     database: process.env.DATABASE_NAME,
     entities: [__dirname + '../**/**/*entity{.ts,.js}'],
     autoLoadEntities: true,
     synchronize: true,
     logger: 'file',
     logging: ['query', 'error'],
   };
 }

 export default registerAs('database', () => ({
   config: typeormModuleOptions(),
 }));
