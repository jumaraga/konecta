import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { AppDataSource } from './config/datasource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  
}
bootstrap();
