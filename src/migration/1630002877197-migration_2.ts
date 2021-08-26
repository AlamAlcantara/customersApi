import {MigrationInterface, QueryRunner} from "typeorm";

export class migration21630002877197 implements MigrationInterface {
    name = 'migration21630002877197'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."address" DROP CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3"`);
        await queryRunner.query(`ALTER TABLE "public"."address" ADD CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."address" DROP CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3"`);
        await queryRunner.query(`ALTER TABLE "public"."address" ADD CONSTRAINT "FK_dc34d382b493ade1f70e834c4d3" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
