import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumnInUserTable1667200819480 implements MigrationInterface {
    name = 'AddNewColumnInUserTable1667200819480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "date_of_birth" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_of_birth"`);
    }

}
