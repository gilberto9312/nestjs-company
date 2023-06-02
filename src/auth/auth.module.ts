import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from '../users/scheme/users.scheme';
import { UsersModule } from "../users/users.module";
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from "./jwt.strategy";
import { JwtModule } from '@nestjs/jwt';

@Module({
 
  imports: [
    UsersModule,
    PassportModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'secreto',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
