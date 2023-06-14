import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

//usage of passport.js for auth packages
//PrismaModule is already global on prisma.module.ts
//A strategy is how you would confirm the authentication method works
//Using Guards from nestjs
//https://youtu.be/GHTA143_b-s?t=8418 for Http.status code
//https://youtu.be/GHTA143_b-s?t=8567 for code testing
// (end-to-end testing) using pactumjs to test send request,
// just do 'yarn add -D pactum'

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
