import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteColumnInUserTable1667201005396
  implements MigrationInterface
{
  name = 'DeleteColumnInUserTable1667201005396';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "date_of_birth"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "date_of_birth" date NOT NULL`,
    );
  }
}
