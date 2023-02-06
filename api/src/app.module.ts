import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './config/typeOrmConfig.service';
import { CoursesModule } from './courses/course.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
    load: [configuration],
  }), TypeOrmModule.forRootAsync({
    inject: [configuration.KEY], useFactory: (configService: ConfigType<typeof configuration>) => {
      const { username, host, database, password, port } = configService.pgConfig
      return {
        username,
        password,
        host,
        port,
        database,
        type: 'postgres',
        entities: ['dist/**/*.model.js'],
        synchronize: false,

      }
    }
  }), ThrottlerModule.forRoot({
    ttl: 60,
    limit: 10,
  }), AuthModule, CoursesModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
