import type { Http } from '@domain/repositories/Http';
import { Genre } from '@domain/models/Genre';
import { GenreRepository } from '@domain/repositories/GenreRepository';
import type { GenreDTO } from '@infrastructure/http/dto/GenreDTO';

/**
 * Defines a genreRepository function that takes a client of type Http and returns a GenreRepository object
 * @param client - an Http client
 * @returns a GenreRepository object
 */
export const genreRepository = (client: Http): GenreRepository => ({
    /**
     * Retrieves all genres
     * @returns an array of Genres objects
     */
    getGenres: async () => {
        const genres = await client.get<GenreDTO>(`Genres`, { IncludeItemTypes: 'Movie' });
        return genres.Items.map((genreDTO: GenreDTO): Genre => {
            return {
                id: genreDTO.Id,
                name: genreDTO.Name
            };
        });
    }
});
