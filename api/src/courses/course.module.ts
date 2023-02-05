import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './course.model';
import { CoursesController } from './course.controller';
import { CoursesService } from './course.service';
@Module({
  imports: [UserModule,TypeOrmModule.forFeature([
     Course ,
    ])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
