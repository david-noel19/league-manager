import { timeStamp } from 'console';
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
    await queryRunner.query(
      `CREATE TABLE "leaguemanager"."person" ("id" uuid NOT NULL, "name" string NOT NULL)`,
    );
    // await queryRunner.createTable(
    //   new Table({
    //     name: 'person',
    //     columns: [
    //       {
    //         name: 'id',
    //         type: 'uuid',
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: 'uuid',
    //       },
    //       { name: 'name', type: 'character varying', isNullable: false },
    //       { name: 'last_name', type: 'string', isNullable: false },
    //       { name: 'phone', type: 'number', isNullable: false },
    //       { name: 'email', type: 'string', isNullable: false },
    //       { name: 'dob', type: 'string', isNullable: false },
    //       {
    //         name: 'role',
    //         type: 'enum',
    //         enum: [
    //           'left fielder',
    //           'center fielder',
    //           'right fielder',
    //           'shortstop',
    //           'second baseman',
    //           'third baseman',
    //           'pitcher',
    //           'first baseman',
    //           'catcher',
    //         ],
    //         isNullable: false,
    //       },
    //       {
    //         name: 'status',
    //         type: 'enum',
    //         enum: ['active', 'inactive', 'suspended'],
    //         isNullable: false,
    //       },
    //       { name: 'age', type: 'number', isNullable: false },
    //     ],
    //   }),
    // );

    // await queryRunner.createTable(
    //   new Table({
    //     name: 'team',
    //     columns: [
    //       {
    //         name: 'id',
    //         type: 'uuid',
    //         isPrimary: true,
    //         isGenerated: true,
    //         generationStrategy: 'uuid',
    //       },
    //       { name: 'name', type: 'string', isNullable: false },
    //       { name: 'coach', type: 'uuid', isNullable: false },
    //       { name: 'captain', type: 'uuid', isNullable: true },
    //       {
    //         name: 'status',
    //         type: 'enum',
    //         enum: ['active', 'inactive'],
    //         isNullable: false,
    //       },
    //     ],
    //   }),
    // );

    // await queryRunner.createTable(
    //   new Table({
    //     name: 'match',
    //     columns: [
    //       {
    //         name: 'id',
    //         type: 'uuid',
    //         isGenerated: true,
    //         isPrimary: true,
    //         isNullable: false,
    //       },
    //       { name: 'home', type: 'uuid', isNullable: false },
    //       { name: 'away', type: 'uuid', isNullable: false },
    //       { name: 'home_score', type: 'number', isNullable: false },
    //       { name: 'away_score', type: 'number', isNullable: false },
    //       { name: 'played', type: 'timestamp', isNullable: false },
    //       { name: 'location', type: 'string', isNullable: false },
    //     ],
    //   }),
    // );

    // /**
    //  * Alter table to add foreign key for on member table to team table for team_id
    //  */
    // await queryRunner.query(
    //   `ALTER TABLE "member" ADD CONSTRIANT "FK_MemberTeam" FOREIGN KEY("team_id") REGERENCES team("s")`,
    // );

    // /**
    //  * Alter table to add foreign key on team to reference person table
    //  */
    // await queryRunner.query(
    //   `ALTER TABLE "team" ADD CONSTRAINT "FK_CoachPerson" FOREIGN KEY('coach') REGERENCES person(id)`,
    // );

    // await queryRunner.query(
    //   `ALTER TABLE "team" ADD CONSTRAINT "FK_CaptainPerson" FOREIGN KEY("captain") REGERENCES person("id")`,
    // );

    // /**
    //  * Alter table to add foreign key on match table to reference team table
    //  */
    // await queryRunner.query(
    //   `ALTER TABLE "match" ADD CONSTRAINT "FK_HomeTeam" FOREIGN KEY("home") REGERENCES team("id")`,
    // );

    // await queryRunner.query(
    //   `ALTER TABLE "match" ADD CONSTARINT "FK_AwayTeam" FOREIGN KEY("away") REGERENCES team("id")`,
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `ALTER TABLE "member" DROP CONSTRAINT "FK_MemberTeam"`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "team" DROP CONSTRAINT "FK_CoachPerson"`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "team" DROP CONSTRAINT "FK_CaptainPerson"`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "match" DROP CONSTRAINT "FK_HomeTeam"`,
    // );
    // await queryRunner.query(
    //   `ALTER TABLE "match" DROP CONSTRAINT "FK_AwayTeam"`,
    // );
    await queryRunner.query(`DROP TABLE "member"`);
    // await queryRunner.query(`DROP TABLE "person"`);
    // await queryRunner.query(`DROP TABLE "team"`);
    // await queryRunner.query(`DROP TABLE "match"`);
  }
}
