import { Product } from "../entities/product.entity";
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
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
