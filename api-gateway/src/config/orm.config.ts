import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmModuleOptions:TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
}

export const OrmConfig = {
    ...typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: ["migrations/*.ts"],
    cli: {
        "migrationsDir": "migrations"
    }
};
export default OrmConfig;
