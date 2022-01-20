import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDb1611089925984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query(
    //     "CREATE USER apiuser WITH PASSWORD '';"
    // );
    await queryRunner.query('GRANT connect ON DATABASE vitals TO apiuser;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS vital;');
    await queryRunner.query('CREATE SCHEMA IF NOT EXISTS audit;');
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.query(
      'ALTER ROLE apiuser SET search_path TO public, vital, audit;',
    );
    await queryRunner.query('GRANT USAGE ON SCHEMA public, vital, audit TO apiuser;');
    await queryRunner.query(
      'alter default privileges in schema public, vital, audit grant all on tables to apiuser;',
    );
    await queryRunner.query(
      'alter default privileges in schema public, vital, audit grant all on sequences to apiuser;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.query('DROP SCHEMA IF EXISTS acm CASCADE;');
    // await queryRunner.query("DROP EXTENSION \"uuid-ossp\" WITH SCHEMA acm;");
    await queryRunner.query('DROP SCHEMA IF EXISTS audit CASCADE;');
  }
}