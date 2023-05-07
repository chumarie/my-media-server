import { Category } from '@domain/models/Category';

/**
 * Represents a repository for categories.
 */
export interface CategoryRepository {
    getCategories: () => Promise<Category[]>;
    getCategoryById: (id: string) => Promise<Category[]>;
    getResumes: () => Promise<Category[]>;
}
