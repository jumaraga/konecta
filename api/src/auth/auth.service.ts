import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getBooks(): string {
    return 'Hello World!';
  }
}
