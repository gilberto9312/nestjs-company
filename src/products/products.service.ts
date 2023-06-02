import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model < ProductDocument > ) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto)
    return product.save();
  }

  findAll() {
    return this.productModel.find().exec()
  }

  findOne(id: string) {
    return this.productModel.findById(id)
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto)
    
  }

  remove(id: string) {
    return this.productModel.findByIdAndRemove(id);
  }
}
