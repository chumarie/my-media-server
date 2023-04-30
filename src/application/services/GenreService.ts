import { GenreRepository } from '@domain/repositories/GenreRepository';

export const genreService = (repository: GenreRepository): GenreRepository => ({
    getGenres: () => {
        return repository.getGenres();
    }
});
