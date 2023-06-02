import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Entity, EntitySchema } from './schema/entity.scheme';

@Module({
  imports: [MongooseModule.forFeature([{ name: Entity.name, schema: EntitySchema }])],
  controllers: [EntitiesController],
  providers: [EntitiesService]
})
export class EntitiesModule {}
