import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class initTables1611161705322 implements MigrationInterface {
  name = 'initTables1611161705322';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'member',
        columns: [
          {
            name: 'team_id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          { name: 'stats', type: 'JSON', isNullable: false },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'person',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          { name: 'name', type: 'character varying', isNullable: false },
          { name: 'last_name', type: 'string', isNullable: false },
          { name: 'phone', type: 'number', isNullable: false },
          { name: 'email', type: 'string', isNullable: false },
          { name: 'dob', type: 'string', isNullable: false },
          { name: 'role', type: 'string', isNullable: false },
          { name: 'status', type: 'string', isNullable: false },
          { name: 'age', type: 'number', isNullable: false },
        ],
      }),
    );
    await queryRunner.query(
      `CREATE TABLE "team" ("name" varchar NOT NULL, "coach" varchar NOT NULL, "captain" varchar, status enum ("active", "inactive"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "match" ("id" uuid NOT NULL, "home" uuid NOT NULL, "away" uuid NOT NULL, "home_score" int NOT NULL, "away_score" int NOT NULL, "played" timestamp NOT NULL, "location" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_reading" DROP CONSTRAINT "FK_4ff861a695f38bbf36009655c54"`,
    );
    await queryRunner.query(`DROP TABLE "vital"."vital_reading"`);
  }
}
