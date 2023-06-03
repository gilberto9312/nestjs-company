import { ApiProperty } from "@nestjs/swagger";

export class Entity {
    @ApiProperty({ example: 'example name', description: 'The name of the entity' })
    name: string;
    @ApiProperty({ example: 'example address', description: 'The direction of the entity' })
    direction: string;
    @ApiProperty({ example: 'example entity identification', description: 'The nit of the entity' })
    nit: number;
    @ApiProperty({ example: 'example phone', description: 'The phone of the entity' })
    phone: number;
}
