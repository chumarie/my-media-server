import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Genre } from '@domain/models/Genre';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { genreService } from '@application/services/GenreService';
import { genreRepository } from '@infrastructure/repositories/genreRepository';
import Tag from '@presentation/atomic-design/atoms/Tag';

export const GenreTagList = () => {
    const [genres, setGenres] = useState<Genre[]>([]);

    const getGenres = useCallback(async () => {
        try {
            const responseGenres = await genreService(genreRepository(httpAxios)).getGenres();
            setGenres(responseGenres);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getGenres();
    }, []);

    
    return (
        <div className="category-list-">
            <div className="flex flex-wrap gap-3">
                {genres.slice(0, 8).map(genre => (
                    <Tag label={genre.name} />
                ))}
            </div>
        </div>
    );
};
