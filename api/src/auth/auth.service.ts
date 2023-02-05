import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, compareSync, hash } from 'bcrypt'
import { Repository } from 'typeorm';
import { INewUserInfo } from '../user/interfaces/user.interface';
import { Auth } from './models/auth.model';
import { UserService } from '../user/user.service';
import { User } from 'src/user/user.model';
import { JwtService } from "@nestjs/jwt";
import { PayloadToken } from './interfaces/jwt.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(Auth)
    private readonly authRepo: Repository<Auth>,
    private readonly jwtService: JwtService) { }
  async createUser(userInfo: INewUserInfo): Promise<User | string> {



    //validate length of password
    const { password } = userInfo;
    if (password.length < 8) return `password should be at least 8 characters long`
    const newUser = await this.userService.saveNewUser(userInfo);
    const hashPassword = await this.hashPassword(password)
    await this.savePassword(+newUser.id, hashPassword);
    return newUser
  }

  async login(password: string, email: string) {
    const user = await this.userService.findUserByEmail(email);
    const match = await this.verifyPassword(password, user.hash)
    if (user && match) return user;
    return null
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {

    return await compare(password, hash)
  }

  async savePassword(user_id: number, hash: string) {
    try {

      await this.authRepo.query(`INSERT INTO "auth"("hash", "createdAt", "updatedAt", "user_id") VALUES ('${hash}', DEFAULT, DEFAULT, ${user_id}) RETURNING "id", "createdAt", "updatedAt"`)
    } catch (e) {
      console.log(e)
    }
  }

  async generateJWT(user: User){
    const paylod:PayloadToken ={admin:user.isAdmin, sub:+user.id}
    return {
      acces_token:await this.jwtService.signAsync(paylod),
      user
    }
  }
}
