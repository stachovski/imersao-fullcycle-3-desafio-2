import { type } from 'os';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRoutesTable1625994648973 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'routes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'startPosition',
            type: 'varchar',
          },
          {
            name: 'endPosition',
            type: 'varchar',
          },
        ],
      }),
    );
    await queryRunner.query(`INSERT INTO "routes" ("title", "startPosition", "endPosition") VALUES ('First Route', '-27.5830119,-48.6088232,16', '-27.5830129,-48.6088232,15')`);
    await queryRunner.query(`INSERT INTO "routes" ("title", "startPosition", "endPosition") VALUES ('Second Route', '-25.5830119,-48.6088232,16', '-27.5830129,-48.6088232,15')`);
    await queryRunner.query(`INSERT INTO "routes" ("title", "startPosition", "endPosition") VALUES ('Third Route', '-26.5830119,-48.6088232,16', '-27.5830129,-48.6088232,15')`);
    await queryRunner.query(`INSERT INTO "routes" ("title", "startPosition", "endPosition") VALUES ('Fourth Route', '-23.5830119,-48.6088232,16', '-27.5830129,-48.6088232,15')`);
    await queryRunner.query(`INSERT INTO "routes" ("title", "startPosition", "endPosition") VALUES ('Fifth Route', '-21.5830119,-48.6088232,16', '-27.5830129,-48.6088232,15')`);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('routes');
  }
}
