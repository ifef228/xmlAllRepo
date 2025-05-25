import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FileAccessor, FileService } from '../file.service';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    {
      provide: FileService,
      useFactory: (products: ProdutsModule) =>
        new FileService<Product[]>(products.filePath),
      inject: [ProdutsModule],
    }
  ],
})
export class ProdutsModule implements FileAccessor {
  public readonly filePath = 'assets/products.json';
}