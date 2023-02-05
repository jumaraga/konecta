import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controlle';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './models/auth.model';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt'
import configuration from 'src/config/configuration';
import { ConfigType } from '@nestjs/config';
@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync({
    inject:[configuration.KEY],
    useFactory: (configService: ConfigType<typeof configuration>) => {
      return {
          secret:configService.jwt.secret,
          signOptions:{
            expiresIn:configService.jwt.expireTime
          }
      }
    }
  }), TypeOrmModule.forFeature([
    Auth,
  ]), JwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule { }
