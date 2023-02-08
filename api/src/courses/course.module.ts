import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './models/course.model';
import { CoursesController } from './course.controller';
import { CoursesService } from './course.service';
import { ImgService } from 'src/images/img.service';
import { ImageModule } from 'src/images/img.module';
@Module({
  imports: [UserModule,TypeOrmModule.forFeature([
     Course ,
    ]),ImageModule],
  controllers: [CoursesController],
  providers: [CoursesService,],
})
export class CoursesModule {}
