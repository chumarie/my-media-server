import { CategoryRepository } from '@domain/repositories/CategoryRepository';

/**
 * A service for interacting with categories.
 * @param repository - The repository to use for data access.
 * @returns A CategoryRepository object with methods for retrieving categories and resumes.
 */
export const categoryService = (repository: CategoryRepository): CategoryRepository => ({
    /**
     * Retrieves all categories.
     * @returns An array of Category objects.
     */
    getCategories: () => {
        return repository.getCategories();
    },

    /**
     * Retrieves a category by its ID.
     * @param id - The ID of the category to retrieve.
     * @returns A Category object.
     */
    getCategoryById: id => {
        return repository.getCategoryById(id);
    },

    /**
     * Retrieves all resumes.
     * @returns An array of Resume objects.
     */
    getResumes: () => {
        return repository.getResumes();
    }
});
