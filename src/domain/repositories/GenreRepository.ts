import { Genre } from '@domain/models/Genre';

/**
 * Represents a repository for genres.
 */
export interface GenreRepository {
    getGenres: () => Promise<Genre[]>;
}
