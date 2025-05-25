"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../file.service");
let ProductsService = class ProductsService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    create(createStockDto) {
        const products = this.fileService.read();
        const stock = { ...createStockDto, id: products.length + 1 };
        this.fileService.add(stock);
    }
    findAll(title) {
        const products = this.fileService.read();
        return title
            ? products.filter((stock) => stock.title.toLowerCase().includes(title.toLowerCase()))
            : products;
    }
    findOne(id) {
        const products = this.fileService.read();
        return products.find((stock) => stock.id === id) ?? null;
    }
    update(id, updateStockDto) {
        const products = this.fileService.read();
        const updatedproducts = products.map((stock) => stock.id === id ? { ...stock, ...updateStockDto } : stock);
        this.fileService.write(updatedproducts);
    }
    remove(id) {
        const filteredproducts = this.fileService
            .read()
            .filter((stock) => stock.id !== id);
        this.fileService.write(filteredproducts);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService])
], ProductsService);
//# sourceMappingURL=products.service.js.map