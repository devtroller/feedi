import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration21667200254868 implements MigrationInterface {
    name = 'NewMigration21667200254868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_951b8f1dfc94ac1d0301a14b7e1" UNIQUE ("uuid"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
