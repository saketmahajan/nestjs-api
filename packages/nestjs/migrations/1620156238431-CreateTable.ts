import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTable1620156238431 implements MigrationInterface {
    name = 'CreateTable1620156238431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "service_list" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "owner" character varying NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_024825a4b6b83906bd6ce7f8c93" UNIQUE ("name"), CONSTRAINT "UQ_c900ccf49f46e51d69ab61affe6" UNIQUE ("owner"), CONSTRAINT "PK_12fac66d04a19866518b42bb3c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, "team" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "service_list"`);
    }

}
