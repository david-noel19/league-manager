import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1611089925984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('GRANT connect ON DATABASE league TO apiuser;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS leaguemanager;');
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query(
      'ALTER ROLE apiuser SET search_path TO public, league;',
    );
    await queryRunner.query(
      'GRANT USAGE ON SCHEMA public, leaguemanager TO apiuser;',
    );
    await queryRunner.query(
      'alter default privileges in schema public, leaguemanager grant all on tables to apiuser;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP SCHEMA IF EXISTS leaguemanager CASCADE;');
  }
}
