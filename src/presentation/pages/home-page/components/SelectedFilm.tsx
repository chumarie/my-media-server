import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { httpAxios } from '@infrastructure/instances/httpAxios';
import { Media } from '@domain/models/Media';
import { mediaService } from '@application/services/MediaService';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { GenreTagList } from './GenreTagList';
import H3 from '@presentation/atomic-design/atoms/typography/H3';
import WatchButton from '@presentation/atomic-design/atoms/WatchButton';
import H2 from '@presentation/atomic-design/atoms/typography/H2';

export const SelectedFilm = () => {
    const [selectedFilm, setSelectedFilm] = useState<Media | null>(null);

    const navigate = useNavigate();

    const getSeletedFilm = useCallback(async () => {
        try {
            const responseFilm = await mediaService(mediaRepository(httpAxios)).getMediaByTitle('Creed');
            setSelectedFilm(responseFilm);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getSeletedFilm();
    }, []);

    
    return (
        selectedFilm && (
            <div className="p-5 mb-3 w-[300px] border-l">
                <div className="relative">
                    <img src={selectedFilm.image} className="rounded-2xl mb-5"/>
                    <div className="overlay border-[#f1f1f1] border opacity-0 hover:opacity-100 rounded-2xl">
                        <H2>{selectedFilm.name}</H2>
                        <H3>{selectedFilm.description}</H3>
                        <WatchButton onClick={() => navigate(`/category/${selectedFilm.id}/item/4`)} label='Watch Now'/>
                    </div>
                </div>
                <GenreTagList/>
            </div>
        )
    );
};
