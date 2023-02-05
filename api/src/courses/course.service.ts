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
        private readonly authRepo: Repository<Course>) { }

    async addNewBook(bookInfo: unknown): Promise<Course> {
        return
    }
    async getBooks() {

    }
    
}