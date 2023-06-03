import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    name: string;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price: number;
    @ApiProperty()
    description: string;
    @ApiProperty()
    idEntity: string;
}
