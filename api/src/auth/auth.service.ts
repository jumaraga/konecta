import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt'
import { Repository } from 'typeorm';
import { INewUserInfo } from '../user/interfaces/user.interface';
import { Auth } from './models/auth.model';
import { UserService } from '../user/user.service';
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userSrevice: UserService,
    @InjectRepository(Auth)
    private readonly authRepo: Repository<Auth>) { }
  async createUser(userInfo: INewUserInfo): Promise<User | string> {
    
  
    
    //validate length of password
    const { password } = userInfo;
    if (password.length < 8) return `password should be at least 8 characters long`
    const newUser = await this.userSrevice.saveNewUser(userInfo);
    const hashPassword = await this.hashPassword(password)
    await this.savePassword(+newUser.id,hashPassword);
    return newUser
  }

  async login(password: string, username: string) {

  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async savePassword(user_id:number,hash:string) {
    try{

      await this.authRepo.query(`INSERT INTO "auth"("hash", "createdAt", "updatedAt", "user_id") VALUES ('${hash}', DEFAULT, DEFAULT, ${user_id}) RETURNING "id", "createdAt", "updatedAt"`)
    }catch(e){
      console.log(e)
    }
  }


}
