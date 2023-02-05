import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import multer from 'multer';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { newCourseInfo } from './courses.interface';
import { Course } from './models/course.model';

@Injectable()
export class CoursesService {
    constructor(
        private readonly userSrevice: UserService,
        @InjectRepository(Course)
        private readonly coursesRepo: Repository<Course>) { }

    async addNewCourse(bookInfo: newCourseInfo): Promise<Course> {
        // returnawait this.coursesRepo.query(bookInfo);
        return await this.coursesRepo.query(`INSERT INTO "courses"("name", "description", "img_url", "createdAt", "updatedAt", "author") VALUES ('${bookInfo.name}', '${bookInfo.description}', '${bookInfo.img_url}', DEFAULT, DEFAULT, ${bookInfo.author})`);
    }
    async getCourses() {

    }

    async updateCourse() {

    }

    async removeCourse() {

    }
}