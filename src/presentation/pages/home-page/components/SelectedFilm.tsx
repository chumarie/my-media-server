import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { mediaService } from '@application/services/MediaService';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { Media } from '@domain/models/Media';
import WatchButton from '@presentation/atomic-design/atoms/WatchButton';

export const SelectedFilm = () => {
    const [selectedFilm, setSelectedFilm] = useState<Media | null>(null);

    const navigate = useNavigate();

    const getSeletedFilm = useCallback(async () => {
        try {
            const responseFilm = await mediaService(mediaRepository(httpAxios)).getMediaById('158');
            setSelectedFilm(responseFilm);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getSeletedFilm();
    }, []);

    if(!selectedFilm) {
        return null;
    }

    const { backgroundImage, logo, production, tagline } = selectedFilm;

    return (
        <div className="flex w-full h-full bg-cover" style={{ backgroundImage: `url("${backgroundImage}")` }}>
            <div className='w-full overlay'>
                <div className="px-10 pb-[150px] h-full flex flex-col justify-center">
                    <img className='w-[300px]' src={logo} />
                    <div className="flex gap-3 mb-2">
                        <span>{production}</span>
                        <span>{tagline}</span>
                    </div>
                    <div className="flex gap-3 h-10">
                    <WatchButton width="w-fit" className="bg-gradient-to-r from-pink-500 to-bg[#ff0068]" onClick={() => navigate(`/category/${selectedFilm.id}/item/4`)} label='Watch Now'/>
                    </div>
                </div>
            </div>
        </div>
    );
};
