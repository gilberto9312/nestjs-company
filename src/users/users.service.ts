import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from "./scheme/users.scheme";


@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model< UserDocument >){}

  async create(email: string, password: string, role: string): Promise<UserDocument> {
    return this.userModel.create({
                                    email,
                                    password,
                                    role
                                });
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) : Promise <UserDocument> {
    return this.userModel.findOne({email})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
