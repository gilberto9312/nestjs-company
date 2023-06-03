import { ApiProperty } from "@nestjs/swagger";
import { Entity } from "../entities/entity.entity";
export class CreateEntityDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    direction: string;
    @ApiProperty()
    nit: number;
    @ApiProperty()
    phone: number;
}
