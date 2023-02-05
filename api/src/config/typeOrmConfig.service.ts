import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { EnvSettings, PgConfig } from "./interfaces";
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

  constructor(
    private readonly configService: ConfigService<EnvSettings>,
  ) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const pgConfig = this.configService.get<PgConfig>('pgConfig');
    return {
      type: 'postgres',
      host: pgConfig.host,
      port: pgConfig.port,
      username: pgConfig.username,
      password: pgConfig.password,
      database: pgConfig.database,
      entities: ['dist/**/*.model.js'],
      synchronize: false,
      toRetry: this.onRetryError,
      logging: this.configService.get('isDev'),
    };
  }

  onRetryError: (err: any) => boolean = (error: any) => {
    if (!this.configService.get('isDev')) {
      /// Exit codes https://nodejs.org/api/process.html#process_exit_codes
      process.exit(1); /// Exit process if connection fails on PROD / DEV
    }

    return true;
  };
}