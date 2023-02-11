import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt'
import { Repository } from 'typeorm';
import { INewUserInfo } from './interfaces/user.interface';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly UserRepository: Repository<User>) {
    }
    async validadUSernameAndEmail(username: string, email: string): Promise<string> {
        const found = (await this.UserRepository.query(/* sql */`Select * from users Where "email" = '${email}' Or "username" ='${username}'`))[0] as User
        if (found?.email === email) return `an account with this email alredy exist`
        if (found?.username === username) return `username already exist`

        return null
    }

    async saveNewUser(userInfo: Omit<User, 'id'>): Promise<User> {
        return await this.UserRepository.save({...userInfo, isAdmin:false})
    }
    async findUserByEmail(email:string){
        return (await this.UserRepository.query(/* sql */`Select us.*, au.hash from users us join auth au on us.id = au.user_id Where email='${email}' `))[0]
    }

}
