import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controlle';
import { UserService } from '../user/user.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './models/auth.model';
@Module({
  imports: [UserModule,TypeOrmModule.forFeature([
      Auth,
    ])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
