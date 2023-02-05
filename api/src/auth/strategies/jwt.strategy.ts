import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import configuration from "src/config/configuration";
import { AuthService } from "../auth.service";
import { PayloadToken } from "../interfaces/jwt.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(private authService: AuthService, @Inject(configuration.KEY) configService:ConfigType<typeof configuration>) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey : configService.jwt.secret
        });
    }

    async validate(payload:PayloadToken) {
        return payload;
    }
}