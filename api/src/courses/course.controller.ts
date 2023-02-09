import { Body, Controller, Delete, UseGuards, Get, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";
import { UserService } from "src/user/user.service";
import { CoursesService } from "./course.service";
import { Param, Query, UploadedFile, UseInterceptors } from "@nestjs/common/decorators";
import { newCourseInfo } from "./courses.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "src/config/multerConfig";
import { AuthGuard } from "@nestjs/passport";
import AdminGuard from "src/auth/guards/admin.guard";
import { PayloadToken } from "src/auth/interfaces/jwt.interface";
import configuration from "src/config/configuration";
import { ImgService } from "src/images/img.service";
import { join } from "path";
import { ConfigService, ConfigType } from "@nestjs/config";
@Controller('courses')
export class CoursesController {
    constructor(
        private readonly BookService: CoursesService,
        private readonly userService: UserService,
        private readonly imgService :ImgService,
        private  confiService :ConfigService
    ) { }
    @Get('/')
    async listCourses(
        @Res() res: Response,) {
        try {
            const courses = await this.BookService.getCourses()
            return res.send({ message: '', data: courses })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @UseGuards(AuthGuard('jwt'), AdminGuard)
    @Post('/')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async createCourse(
        @Req() req: Request,
        @Body() courseInfo: newCourseInfo,
        @UploadedFile() file: Express.Multer.File,
        @Res() res: Response) {
        try {
            const { sub } = req.user as PayloadToken
            const img_url =`${this.confiService.get('config.appOrigin')}/images/${file.filename}`
            const uploadedImage = await  this.imgService.saveImg(img_url,sub,'course')
            const newCourse = await this.BookService.addNewCourse({ ...courseInfo, img_url, author: sub })
            return res.send({ message: 'new course create successfuly', data: newCourse })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @UseGuards(AuthGuard('jwt'), AdminGuard)
    @Post('/:id')
    async updateCourse(
        @Body() info: newCourseInfo,
        @Res() res: Response,
        @Req() req: Request,
        @Param() id: number) {
        try {
            await this.BookService.updateCourse(id, info)
            return res.send({ message: 'new course updated successfuly', data: '' })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @UseGuards(AuthGuard('jwt'), AdminGuard)
    @Delete('/:id')
    async deleteCourse(
        @Res() res: Response,
        @Req() req: Request,
        @Param() id: number) {
        try {
            await this.BookService.removeCourse(id)
            return res.send({ message: 'new course deleted successfuly', data: '' })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

}