import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './config/typeOrmConfig.service';
import { CoursesModule } from './courses/course.module';

@Module({
  imports: [ ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'./.env',
      load: [configuration],
    }),TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),AuthModule,CoursesModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
