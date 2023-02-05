import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import multer from 'multer';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { Course } from './course.model';

@Injectable()
export class CoursesService {
    constructor(
        private readonly userSrevice: UserService,
        @InjectRepository(Course)
        private readonly coursesRepo: Repository<Course>) { }

    async addNewCourse(bookInfo: unknown): Promise<Course> {
        const newCourse = this.coursesRepo.create();
        return await this.coursesRepo.save(newCourse);
    }
    async getCourses() {

    }
    
}