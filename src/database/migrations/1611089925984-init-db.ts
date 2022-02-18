import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1611089925984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(
    //     "CREATE USER apiuser WITH PASSWORD '';"
    // );
    await queryRunner.query('GRANT connect ON DATABASE leagues TO apiuser;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS member;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS person;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS team;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS match;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS staff;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS audit;');
    await queryRunner.query(
      'ALTER ROLE apiuser SET search_path TO public, league, audit;',
    );
    await queryRunner.query(
      'GRANT USAGE ON SCHEMA public, league, audit TO apiuser;',
    );
    await queryRunner.query(
      'alter default privileges in schema public, league, audit grant all on tables to apiuser;',
    );
    await queryRunner.query(
      'alter default privileges in schema public, league, audit grant all on sequences to apiuser;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query('DROP SCHEMA IF EXISTS acm CASCADE;');
    // await queryRunner.query("DROP EXTENSION \"uuid-ossp\" WITH SCHEMA acm;");
    await queryRunner.query('DROP SCHEMA IF EXISTS audit CASCADE;');
  }
}
