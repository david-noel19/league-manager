import { MigrationInterface, QueryRunner } from 'typeorm';

export class initTables1611161705322 implements MigrationInterface {
  name = 'initTables1611161705322';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "audit"."audit-trail" ("id" uuid NOT NULL, "organization_id" uuid, "entity_name" character varying NOT NULL, "action" character varying NOT NULL, "new_value" jsonb, "modified_at" TIMESTAMP NOT NULL, "modified_by" uuid, "metadata" jsonb, CONSTRAINT "PK_b87bd9fcda5887acd7f2d3848f6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."disclaimer_type" ("id" uuid NOT NULL, "name" character varying NOT NULL, "code" character varying NOT NULL, CONSTRAINT "PK_86c00c8b4f7c221febc1c53de15" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."disclaimer" ("id" uuid NOT NULL, "disclaimer_text" character varying NOT NULL, "locale" character varying NOT NULL, "disclaimer_type_id" uuid, "parent_disclaimer_id" uuid, "active" boolean NOT NULL, "active_status_changed_at" date, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_0251d9ad4f5e98c99b89814a61d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."vital_sign" ("id" uuid NOT NULL, "code" character varying NOT NULL, "name" character varying NOT NULL, "display_name" character varying NOT NULL, "available_units" jsonb NOT NULL, "default_unit_code" character varying NOT NULL, "active" boolean NOT NULL, "active_status_changed_at" date, "archived" boolean NOT NULL, "archived_status_changed_at" date, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_e2945fd6990ba7d9604abd6402f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."reminder_message" ("id" uuid NOT NULL, "message_type" character varying NOT NULL, "locale" character varying NOT NULL, "message" character varying NOT NULL, "vital_sign_id" uuid, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_9ca41348a16adc8c00a2880ce54" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "vital"."schedule_type_enum" AS ENUM('preset', 'schedule')`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."schedule" ("id" uuid NOT NULL, "type" "vital"."schedule_type_enum" NOT NULL, "subscriber_id" character varying, "schedule" jsonb NOT NULL, "message_id" uuid, "active" boolean NOT NULL, "active_status_changed_at" date, "archived" boolean NOT NULL, "archived_status_changed_at" date, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_7ae10507a97b3a77d13d1a2bdd2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."schedule_preset" ("id" uuid NOT NULL, "organization_id" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "schedule_id_id" uuid, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "REL_771e51107d711a76ef30150835" UNIQUE ("schedule_id_id"), CONSTRAINT "PK_da94c0d6dc99f5d40d6fea1dc88" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."vital_sign_assignment" ("id" uuid NOT NULL, "assigned_vital_signs" jsonb NOT NULL, "organization_id" character varying, "subscriber_id" character varying, "type" character varying NOT NULL, "created_at" TIMESTAMP, "created_by" character varying, "updated_at" TIMESTAMP, "updated_by" character varying, CONSTRAINT "PK_6b76533eaa7bc57b4a7285d5483" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_87ce4f6e9d1ef3241cec655db2" ON "vital"."vital_sign_assignment" ("type") `,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."vital_sign_threshold" ("id" uuid NOT NULL, "organization_id" character varying, "subscriber_id" character varying, "threshold_limits" jsonb NOT NULL, "normal_high" real, "normal_low" real, "accepted_disclaimers" jsonb NOT NULL, "vital_sign_id_id" uuid, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_d0b71c2d48b1abb25c2142ca22c" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."locale" ("id" uuid NOT NULL, "name" character varying NOT NULL, "native_name" character varying NOT NULL, "display_name" character varying NOT NULL, "english_name" character varying NOT NULL, "lcid" integer NOT NULL, "active" boolean NOT NULL, "active_status_changed_at" date, "archived" boolean NOT NULL, "archived_status_changed_at" date, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "PK_c71a12fe0f4bcf84e89c29b170a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."observation_error" ("id" uuid NOT NULL, "raw_log_id" character varying NOT NULL, "occured_at" TIMESTAMP NOT NULL, "resolved_at" TIMESTAMP NOT NULL, "error_code" character varying NOT NULL, "error_message" character varying NOT NULL, "stack_trace" character varying NOT NULL, CONSTRAINT "PK_52fa49e6333bd75442ac7b12e36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."raw_log" ("id" uuid NOT NULL, "source" character varying NOT NULL, "raw_payload" jsonb NOT NULL, "created_at" TIMESTAMP NOT NULL, "processed_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_68b84ed25f233cafb20957a1091" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "vital"."vital_reading" ("id" uuid NOT NULL, "organization_id" character varying NOT NULL, "subscriber_id" character varying NOT NULL, "vital_sign" character varying NOT NULL, "delta" integer NOT NULL, "normal_high" integer NOT NULL, "normal_low" integer NOT NULL, "threshold_severity" integer NOT NULL, "threshold_direction" integer NOT NULL, "threshold_limit" integer NOT NULL, "reading" integer NOT NULL, "metadata" jsonb NOT NULL, "recorded_at" TIMESTAMP NOT NULL, "raw_record_id_id" uuid, "vital_sign_id" uuid, "created_at" TIMESTAMP NOT NULL, "created_by" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "updated_by" character varying, CONSTRAINT "REL_70551479a1f7b93c8b83232154" UNIQUE ("raw_record_id_id"), CONSTRAINT "PK_219407567f085a763ecb65fcfd3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."disclaimer" ADD CONSTRAINT "FK_0ad7918327b2f816511e9c8f3e0" FOREIGN KEY ("disclaimer_type_id") REFERENCES "vital"."disclaimer_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."disclaimer" ADD CONSTRAINT "FK_f4862574cc6c8f293f6ddcba438" FOREIGN KEY ("parent_disclaimer_id") REFERENCES "vital"."disclaimer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."reminder_message" ADD CONSTRAINT "FK_6265b44cd8cbadbc5781f0ad5e5" FOREIGN KEY ("vital_sign_id") REFERENCES "vital"."vital_sign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."schedule" ADD CONSTRAINT "FK_6fa0b63cad74c1fcc6c5aebb182" FOREIGN KEY ("message_id") REFERENCES "vital"."reminder_message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."schedule_preset" ADD CONSTRAINT "FK_771e51107d711a76ef30150835d" FOREIGN KEY ("schedule_id_id") REFERENCES "vital"."schedule"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_sign_threshold" ADD CONSTRAINT "FK_aeaf12b8e4fddc36cc578dac01e" FOREIGN KEY ("vital_sign_id_id") REFERENCES "vital"."vital_sign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_reading" ADD CONSTRAINT "FK_70551479a1f7b93c8b832321542" FOREIGN KEY ("raw_record_id_id") REFERENCES "vital"."raw_log"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_reading" ADD CONSTRAINT "FK_4ff861a695f38bbf36009655c54" FOREIGN KEY ("vital_sign_id") REFERENCES "vital"."vital_sign"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_reading" DROP CONSTRAINT "FK_4ff861a695f38bbf36009655c54"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_reading" DROP CONSTRAINT "FK_70551479a1f7b93c8b832321542"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."vital_sign_threshold" DROP CONSTRAINT "FK_aeaf12b8e4fddc36cc578dac01e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."schedule_preset" DROP CONSTRAINT "FK_771e51107d711a76ef30150835d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."schedule" DROP CONSTRAINT "FK_6fa0b63cad74c1fcc6c5aebb182"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."reminder_message" DROP CONSTRAINT "FK_6265b44cd8cbadbc5781f0ad5e5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."disclaimer" DROP CONSTRAINT "FK_f4862574cc6c8f293f6ddcba438"`,
    );
    await queryRunner.query(
      `ALTER TABLE "vital"."disclaimer" DROP CONSTRAINT "FK_0ad7918327b2f816511e9c8f3e0"`,
    );
    await queryRunner.query(`DROP TABLE "vital"."vital_reading"`);
    await queryRunner.query(`DROP TABLE "vital"."raw_log"`);
    await queryRunner.query(`DROP TABLE "vital"."observation_error"`);
    await queryRunner.query(`DROP TABLE "vital"."locale"`);
    await queryRunner.query(`DROP TABLE "vital"."vital_sign_threshold"`);
    await queryRunner.query(
      `DROP INDEX "vital"."IDX_87ce4f6e9d1ef3241cec655db2"`,
    );
    await queryRunner.query(`DROP TABLE "vital"."vital_sign_assignment"`);
    await queryRunner.query(`DROP TABLE "vital"."schedule_preset"`);
    await queryRunner.query(`DROP TABLE "vital"."schedule"`);
    await queryRunner.query(`DROP TYPE "vital"."schedule_type_enum"`);
    await queryRunner.query(`DROP TABLE "vital"."reminder_message"`);
    await queryRunner.query(`DROP TABLE "vital"."vital_sign"`);
    await queryRunner.query(`DROP TABLE "vital"."disclaimer"`);
    await queryRunner.query(`DROP TABLE "vital"."disclaimer_type"`);
    await queryRunner.query(`DROP TABLE "audit"."audit-trail"`);
  }
}
