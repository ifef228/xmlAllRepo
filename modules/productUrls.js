class ProductsUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getProducts() {
        return `${this.baseUrl}/products`;
    }

    getProductById(id) {
        return `${this.baseUrl}/products/${id}`;
    }

    searchProductsByTitle(title) {
        return `${this.baseUrl}/products/filter?title=${title}`;
    }

    createProduct() {
        return `${this.baseUrl}/products`;
    }
 
    removeProductById(id) {
        return `${this.baseUrl}/products/${id}`;
    }

    updateProductById(id) {
        return `${this.baseUrl}/products/${id}`;
    }
}

export const productUrls = new ProductsUrls();