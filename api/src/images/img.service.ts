import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import configuration from "src/config/configuration";
import { Repository } from "typeorm";
import { Image } from "./models/img.model";


@Injectable()
export class ImgService {
    constructor(
        @InjectRepository(Image)
        private imgRepo: Repository<Image>) { }

    async saveImg(url: string, user_id: number, type: string) {
        return await this.imgRepo.query(`INSERT INTO images ("url","user_id","type","createdAt") VALUES ('${url}',${user_id},'${type}',DEFAULT)`);
    }
    getLocalImg(uri: string) {

    }
}