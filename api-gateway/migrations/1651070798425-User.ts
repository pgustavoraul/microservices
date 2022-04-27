import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1651070798425 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nic',
            type: 'varchar',
            length: '30',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'date',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'date',
            isNullable: true,
          },
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE user`);
  }
}
