import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Response } from "express";
import { userInfo } from "os";
import { AuthService } from "./auth.service";
import { INewUserInfo } from "../user/interfaces/user.interface";
import { UserService } from "src/user/user.service";
@Controller('auth')
export class AuthController {

    constructor(private readonly AuthService: AuthService, private readonly userService: UserService) { }
    @Post('/')
    async signUp(@Body() userInfo: INewUserInfo, @Res() res: Response) {
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
    @Post('/')
    async signIp(@Body() userInfo: INewUserInfo, @Res() res: Response) {
    }

    @Post('signout')
    async logOut(request) {
        const { user } = request
    }

}