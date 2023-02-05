import { Body, Controller, Delete, ForbiddenException, Get, Post, Req, Res } from "@nestjs/common";
import { Response } from "express";
import { INewUserInfo } from "../user/interfaces/user.interface";
import { UserService } from "src/user/user.service";
import { CoursesService } from "./course.service";
import { UploadedFile, UseInterceptors } from "@nestjs/common/decorators";
import { newCourseInfo } from "./courses.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerConfig, multerOptions } from "src/config/multerConfig";
@Controller('courses')
export class CoursesController {
    constructor(private readonly BookService: CoursesService, private readonly userService: UserService) { }
    @Get('/')
    async listCourses() {

    }

    @Post('/')
    @UseInterceptors(FileInterceptor('file',multerOptions))
    async createCourse(
        @Body() courseInfo: newCourseInfo,
        @UploadedFile() file: Express.Multer.File, @Res() res: Response) {
        try {
            
            return res.send({ message: '' })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @Post('/:id')
    async updateCourse(@Body() userInfo: INewUserInfo, @Res() res: Response) {
    }

    @Delete('/:id')
    async logOut(request) {
        const { user } = request
    }

}