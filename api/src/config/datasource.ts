import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { PgConfig } from "./interfaces";
import configuration from "./configuration";
config()
// this configuration it's neccesary to generate migrations
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: ['dist/**/*.model.js'],
    synchronize: false,
    logging: true,
    subscribers: [],
    migrations: [],
})
