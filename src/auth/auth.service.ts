import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'I am signup.';
  }

  login() {
    return 'I am login.';
  }
}