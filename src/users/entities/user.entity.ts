import { ApiProperty } from '@nestjs/swagger';
import { Role } from "src/auth/roles.enum";

export class User {
        @ApiProperty({ example: 'example@example.com', description: 'user email' })
        email: string;
        @ApiProperty({ example: 'example', description: 'user password' })
        password: string;
        @ApiProperty({ example: Role, description: 'user role' })
        role: Role[];
}
