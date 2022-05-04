import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1651631025689 implements MigrationInterface {

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
              length: '100',
              isNullable: false,
            },
            {
              name: 'password',
              type: 'varchar',
              length: '100',
              isNullable: false,
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
