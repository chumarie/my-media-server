import { CategoryRepository } from '@domain/repositories/CategoryRepository';

export const categoryService = (repository: CategoryRepository): CategoryRepository => ({
    getCategories: () => {
        return repository.getCategories();
    },
    getCategoryById: id => {
        return repository.getCategoryById(id);
    }
});
