import { Controller, Get, Param, Res } from "@nestjs/common";
import { createReadStream } from "node:fs";
import { join } from "path";
import { ImgService } from "./img.service";
import { Response } from "express";

@Controller('images')
export class ImgController{
    constructor(private readonly imgService:ImgService){}

    @Get('/:id')
    getImag(@Param('id')id:string,@Res() res:Response){
        return res.sendFile(join(process.cwd(),'statics','imgs',id))
    }   
}