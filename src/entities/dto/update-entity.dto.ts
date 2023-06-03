import { PartialType } from '@nestjs/mapped-types';
import { CreateEntityDto } from './create-entity.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEntityDto extends PartialType(CreateEntityDto) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    direction: string;
    @ApiProperty()
    nit: number;
    @ApiProperty()
    phone: number;
}
