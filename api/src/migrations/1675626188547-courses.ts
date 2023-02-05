import { MigrationInterface, QueryRunner } from "typeorm";

export class api1675626188547 implements MigrationInterface {
    name = 'api1675626188547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "img_url" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "author" integer, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "img_url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "author" integer`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "course_id" integer`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "UQ_42dc69837b2e7bc603686ddaf53" UNIQUE ("course_id")`);
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"`);
        await queryRunner.query(`ALTER TABLE "auth" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_42dc69837b2e7bc603686ddaf53" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auth" DROP CONSTRAINT "FK_9922406dc7d70e20423aeffadf3"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_42dc69837b2e7bc603686ddaf53"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07"`);
        await queryRunner.query(`ALTER TABLE "auth" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "auth" ADD CONSTRAINT "FK_9922406dc7d70e20423aeffadf3" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "UQ_42dc69837b2e7bc603686ddaf53"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "course_id"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "author" integer`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "img_url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "name" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "courses"`);
    }

}
