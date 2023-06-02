import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { EntitiesModule } from './entities/entities.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(''),
    ProductsModule,
    EntitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
