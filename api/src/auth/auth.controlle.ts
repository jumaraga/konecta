import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService:AuthService) { }
    @Post('/')
    signIn() {
        return this.AuthService.getBooks();
    }

    @Post('signout')
    async logOut(request) {
        const {user} = request
    }

}