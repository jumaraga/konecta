import { Injectable,UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,'local') {
    constructor(private authService:AuthService){
        super({usernameField:'email'});
    }

    async validate(email:string,password:string){
        const user = await this.authService.login(password,email);
        if(!user) throw new UnauthorizedException(`invalid credentials `) 
        return user
    }
}