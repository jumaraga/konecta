import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { Response, Request } from "express";
import { AuthService } from "./auth.service";
import { INewUserInfo } from "../user/interfaces/user.interface";
import { UserService } from "src/user/user.service";
import { AuthGuard } from "@nestjs/passport/dist/auth.guard";
import { User } from "src/user/user.model";
@Controller('auth')
export class AuthController {

    constructor(
        private readonly AuthService: AuthService,
        private readonly userService: UserService,
    ) { }
    @Post('/')
    async signUp(
        @Body() userInfo: INewUserInfo,
        @Res() res: Response
    ) {
        try {
            // verify if username already exist
            const validationMessage = await this.userService.validadUSernameAndEmail(userInfo.username, userInfo.email)
            if (validationMessage) return res.send({ message: validationMessage, data: null })
            const data = await this.AuthService.createUser(userInfo);
            return res.send({ message: '', data })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async signIn(@Req() req: Request, @Body() email: string, @Body() password: string, @Res() res: Response) {
        const user = req.user as User;
        const token = await this.AuthService.generateJWT(user)
        return res.send(token)
    }

    @Post('signout')
    async logOut(request) {
        const { user } = request
    }

}