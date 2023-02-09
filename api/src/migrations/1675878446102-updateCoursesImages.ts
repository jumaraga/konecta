import { MigrationInterface, QueryRunner } from "typeorm";

export class api1675878446102 implements MigrationInterface {
    name = 'CoursesandImages1675878446102'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07"`);
        await queryRunner.query(`CREATE TABLE "image" ("url" character varying NOT NULL, "type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, CONSTRAINT "PK_602959dc3010ff4b4805ee7f104" PRIMARY KEY ("url"))`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "author" integer`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "img_url" character varying`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "UQ_f7b2a1cc9488c04aeaeb90871b4" UNIQUE ("img_url")`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_b0b068a2be3e9a2ed6052786781" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_f7b2a1cc9488c04aeaeb90871b4" FOREIGN KEY ("img_url") REFERENCES "image"("url") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_42dc69837b2e7bc603686ddaf53"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_f7b2a1cc9488c04aeaeb90871b4"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_b0b068a2be3e9a2ed6052786781"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "UQ_42dc69837b2e7bc603686ddaf53"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "UQ_f7b2a1cc9488c04aeaeb90871b4"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "img_url"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "author" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "img_url" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "name" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_950ceb9d7ceb79650f5a31b3b07" FOREIGN KEY ("author") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
