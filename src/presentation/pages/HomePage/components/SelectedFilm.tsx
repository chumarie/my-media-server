import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { mediaService } from '@application/services/MediaService';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { mediaRepository } from '@infrastructure/repositories/mediaRepository';
import { Media } from '@domain/models/Media';
import WatchButton from '@presentation/atomic-design/atoms/WatchButton/WatchButton';

export const SelectedFilm = () => {
    const [selectedFilm, setSelectedFilm] = useState<Media | null>(null);

    const navigate = useNavigate();
    const selectedFilmId = '9927';

    const getSeletedFilm = useCallback(async () => {
        try {
            const responseFilm = await mediaService(mediaRepository(httpAxios)).getMediaById(selectedFilmId);
            setSelectedFilm(responseFilm);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getSeletedFilm();
    }, []);

    if (!selectedFilm) {
        return null;
    }

    const { logo, production, tagline, id } = selectedFilm;

    const handleSelectedFilmClick = () => {
        navigate(`/category/4/item/${id}`);
    };

    const formatClassName = clsx(
        'flex w-full h-full bg-cover',
        `bg-[url('/src/presentation/assets/bkg_mobile.jpeg')]`,
        `lg:bg-[url('/src/presentation/assets/bkg_desktop.jpeg')]`
    );

    return (
        <div className={formatClassName}>
            <div className='w-full overlay'>
                <div className='px-10 pb-[210px] h-full flex flex-col justify-center'>
                    <img className='w-[300px]' src={logo} />
                    <div className='flex gap-3 mb-4'>
                        <span>{production}</span>
                        <span>{tagline}</span>
                    </div>
                    <div className='flex gap-3 h-10'>
                        <WatchButton
                            width='w-fit'
                            hasIcon={true}
                            className='bg-gradient-to-r from-pink-500 to-bg[#ff0068]'
                            onClick={handleSelectedFilmClick}
                            label='Watch Now'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
