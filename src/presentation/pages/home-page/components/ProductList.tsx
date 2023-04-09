import { useCallback, useEffect, useState } from 'react';

import { Product } from '@domain/models/Product';
import { productService } from '@application/services/ProductService';
import { productRepositoryFake } from '@infrastructure/instances/productRepositoryFake';

interface ProductListProps {
    onSelectProduct: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onSelectProduct }) => {
    const [products, setProducts] = useState<Product[]>([]);
    
    const getProducts = useCallback(async () => {
        try {
            const responseProducts = await productService(productRepositoryFake).getProducts();
            setProducts(responseProducts);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, []);

    const handleSelectProduct = (product: Product) => {
        onSelectProduct(product);
    };

    return (
        <div>
            <h2>List of products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <button
                            onClick={() => {
                                handleSelectProduct(product);
                            }}
                        >
                            {product.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
