import { Body, Controller, Delete, UseGuards, Get, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";
import { UserService } from "src/user/user.service";
import { CoursesService } from "./course.service";
import { Query, UploadedFile, UseInterceptors } from "@nestjs/common/decorators";
import { newCourseInfo } from "./courses.interface";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "src/config/multerConfig";
import { AuthGuard } from "@nestjs/passport";
import AdminGuard from "src/auth/guards/admin.guard";
import { PayloadToken } from "src/auth/interfaces/jwt.interface";
@UseGuards(AuthGuard('jwt'))
@Controller('courses')
export class CoursesController {
    constructor(private readonly BookService: CoursesService, private readonly userService: UserService) { }
    @Get('/')
    async listCourses() {

    }

    @UseGuards(AdminGuard)
    @Post('/')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async createCourse(
        @Req() req :Request,
        @Body() courseInfo: newCourseInfo,
        @UploadedFile() file: Express.Multer.File,
        @Res() res: Response) {
        try {
            const {sub} = req.user as PayloadToken 
            const newCourse = await this.BookService.addNewCourse({ ...courseInfo, img_url: file.path, author:sub })
            return res.send({ message: 'new course create successfuly', data: newCourse })
        } catch (e) {
            const message = 'Something wrong happened. Please contact help@konecta.com for assistance.';
            res.send({ message, e })
        }
    }

    @Post('/:id')
    async updateCourse(@Body() info: unknown, @Res() res: Response, @Query() id: number) {

    }

    @Delete('/:id')
    async deleteCourse(@Res() res: Response, @Query() id: number) {

    }
}