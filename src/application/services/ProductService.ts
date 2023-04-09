import { ProductRepository } from '@domain/repositories/ProductRepository';

export const productService = (repository: ProductRepository): ProductRepository => ({
    getProducts: () => {
        return repository.getProducts();
    },
    getProductsById: id => {
        return repository.getProductsById(id);
    }
});
