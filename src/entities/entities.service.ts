import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { Entity, EntityDocument} from './schema/entity.scheme'


@Injectable()
export class EntitiesService {
  constructor(@InjectModel(Entity.name) private readonly entityModel: Model< EntityDocument >) {}

  async create(createEntityDto: CreateEntityDto ): Promise < EntityDocument > {
    const entity = new this.entityModel(createEntityDto)
    return entity.save()
  }

  async findAll() : Promise < EntityDocument[] > {
    return this.entityModel.find().exec()
  }

  async findOne(id: number) : Promise < EntityDocument >{
    return this.entityModel.findById(id)
  }

  async update(id: number, updateEntityDto: UpdateEntityDto) : Promise < EntityDocument >{
    return this.entityModel.findByIdAndUpdate(id, updateEntityDto)
  }

  async remove(id: number) : Promise < EntityDocument > {
    return this.entityModel.findByIdAndDelete(id)
  }
}
