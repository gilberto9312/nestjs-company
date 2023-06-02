import { Role } from "src/auth/roles.enum";

export class User {
    email: string;
    password: string;
    role: Role[];
}
