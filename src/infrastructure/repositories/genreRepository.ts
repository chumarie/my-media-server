import type { Http } from '@domain/repositories/Http';
import { Genre } from '@domain/models/Genre';
import { GenreRepository } from '@domain/repositories/GenreRepository';
import type { GenreDTO } from '@infrastructure/http/dto/GenreDTO';

export const genreRepository = (client: Http): GenreRepository => ({
    getGenres: async () => {
        const genre = await client.get<GenreDTO>(`Genres`, { IncludeItemTypes: 'Movie' });
        return genre.Items.map((genreDTO: GenreDTO): Genre => {
            return {
                id: genreDTO.Id,
                name: genreDTO.Name
            };
        });
    }
});
