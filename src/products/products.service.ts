import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileService } from '../file.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private fileService: FileService<Product[]>) {}

  create(createStockDto: CreateProductDto) {
    const products = this.fileService.read();

    // для простоты новый id = текущее количество карточек + 1
    const stock = { ...createStockDto, id: products.length + 1 };

    this.fileService.add(stock);
  }

  findAll(title?: string): Product[] {
    const products = this.fileService.read();

    return title
      ? products.filter((stock) =>
          stock.title.toLowerCase().includes(title.toLowerCase()),
        )
      : products;
  }

  findOne(id: number): Product | null {
    const products = this.fileService.read();

    return products.find((stock) => stock.id === id) ?? null;
  }

  update(id: number, updateStockDto: UpdateProductDto): void {
    const products = this.fileService.read();

    const updatedproducts = products.map((stock) =>
      stock.id === id ? { ...stock, ...updateStockDto } : stock,
    );

    this.fileService.write(updatedproducts);
  }

  remove(id: number): void {
    const filteredproducts = this.fileService
      .read()
      .filter((stock) => stock.id !== id);

    this.fileService.write(filteredproducts);
  }
}