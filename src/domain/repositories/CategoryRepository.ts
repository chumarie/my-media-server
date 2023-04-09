import { Category } from '@domain/models/Category';

export interface CategoryRepository {
    getCategories: () => Promise<Category[]>;
    getCategoryById: (id: number) => Promise<Category[]>;
}