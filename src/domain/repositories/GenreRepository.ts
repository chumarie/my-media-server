import { Genre } from '@domain/models/Genre';

export interface GenreRepository {
    getGenres: () => Promise<Genre[]>;
}