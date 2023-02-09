
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImgController } from './img.controller';
import { ImgService } from './img.service';
import { Image } from './models/img.model';

@Module({
    imports: [TypeOrmModule.forFeature([
      Image,
    ])],
    providers: [ImgService],
    exports: [ImgService],
    controllers:[ImgController]
})
export class ImageModule { }
