import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAllFilteredByTitle(title: string): import("./entities/product.entity").Product[];
    create(createStockDto: CreateProductDto): void;
    findAll(): import("./entities/product.entity").Product[];
    findOne(id: string): import("./entities/product.entity").Product | null;
    update(id: string, updateStockDto: UpdateProductDto): void;
    remove(id: string): void;
}
