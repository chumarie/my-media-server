import { Product } from '@domain/models/Product';

export interface ICart {
    createCart: () => Cart;
    addProductToCart: (cart: Cart, product: Product) => Cart;
    removeProductFromCart: (cart: Cart, product: Product) => Cart;
}

export type Cart = {
    id: string;
    products: Product[];
};
