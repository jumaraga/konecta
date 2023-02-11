import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AppDataSource } from './config/datasource.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://127.0.0.1.3001'
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  app.use(helmet())
  await app.listen(3001);

}
bootstrap();
