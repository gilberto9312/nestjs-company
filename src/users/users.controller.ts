import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { RolesGuard } from '../auth/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({
    status: 201,
    description: 'created',
    type: User,
  })
  async create(@Body('password') password: string, @Body('email') email: string, @Body('role') role: string) {

    const saltOrRounds = 10;
        const hashedPassword =  await bcrypt.hash(password, saltOrRounds);
        const result =  await this.usersService.create(
            email,
            hashedPassword,
            role
        );
        return result;
  }

}
