import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EntityDocument = HydratedDocument<Entity>;

@Schema()
export class Entity {
  @Prop()
  name: string;

  @Prop()
  direction: string;

  @Prop()
  nit: number;
  
  @Prop()
  phone: number
}

export const EntitySchema = SchemaFactory.createForClass(Entity);
