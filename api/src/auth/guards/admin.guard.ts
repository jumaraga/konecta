import { CanActivate, ExecutionContext, ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PayloadToken } from '../interfaces/jwt.interface';

@Injectable()
export default class AdminGuard implements CanActivate {
    constructor(private reflector:Reflector){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user as PayloadToken;
        if(user.admin) return true
        return false
    }

}