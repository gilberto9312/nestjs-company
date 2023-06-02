import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/scheme/users.scheme';
import * as jwt from 'jsonwebtoken';
import { Role } from './roles.enum';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET = 'secreto'; // Cambia 'secreto' por tu clave secreta
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  
  async validateUserByJwt(payload: JwtPayload): Promise<User | null> {
    const user = await this.userModel.findOne({ email: payload.email }).exec();
    if (!user) {
      return null;
    }
    
    return user;
  }
  
  async signIn(email: string, password: string): Promise<{ token: string;  }> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    const payload = { email: user.email, role: user.role };
    const token = jwt.sign(payload, this.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
}
