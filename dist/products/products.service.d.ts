import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileService } from '../file.service';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private fileService;
    constructor(fileService: FileService<Product[]>);
    create(createStockDto: CreateProductDto): void;
    findAll(title?: string): Product[];
    findOne(id: number): Product | null;
    update(id: number, updateStockDto: UpdateProductDto): void;
    remove(id: number): void;
}
