import { ApiProperty } from '@nestjs/swagger';

export class Product {
    @ApiProperty({ example: 'example name', description: 'The name of the product' })
    name: string;
    @ApiProperty({ example: '10', description: 'quantity inventory' })
    quantity: number;
    @ApiProperty({ example: '1000', description: 'price of the product' })
    price: number;
    @ApiProperty({ example: 'example descriptions', description: 'The description of the product' })
    description: string;
    @ApiProperty({ example: 'company id', description: 'id of the company' })
    idEntity: string;
}
