import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { Entity, EntityDocument} from './schema/entity.scheme'


@Injectable()
export class EntitiesService {
  constructor(@InjectModel(Entity.name) private readonly entityModel: Model< EntityDocument >) {}

  create(createEntityDto: CreateEntityDto) {
    const entity = new this.entityModel(createEntityDto)
    return entity.save()
  }

  findAll() {
    return this.entityModel.find().exec()
  }

  findOne(id: number) {
    return this.entityModel.findById(id)
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return this.entityModel.findByIdAndUpdate(id, updateEntityDto)
  }

  remove(id: number) {
    return this.entityModel.findByIdAndDelete(id)
  }
}
