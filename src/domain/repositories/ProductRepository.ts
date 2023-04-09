import { Product } from '@domain/models/Product';

export interface ProductRepository {
    getProducts: () => Promise<Product[]>;
    getProductsById: (id: string) => Promise<Product[]>;
}