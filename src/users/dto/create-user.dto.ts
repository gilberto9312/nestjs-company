import { User } from "../entities/user.entity";
import { ApiProperty } from '@nestjs/swagger';
import { Role } from "src/auth/roles.enum";

export class CreateUserDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    role: Role[];
}
