import { GenreRepository } from '@domain/repositories/GenreRepository';

/**
 * A service for interacting with genres.
 * @param repository - The repository to use for data access.
 * @returns A GenreRepository object with a method for retrieving genres.
 */
export const genreService = (repository: GenreRepository): GenreRepository => ({
    /**
     * Retrieves all genres.
     * @returns An array of Genre objects.
     */
    getGenres: () => {
        return repository.getGenres();
    }
});
