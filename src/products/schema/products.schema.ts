import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop()
  price: number;
  
  @Prop()
  description: string

  @Prop()
  idEntity: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
