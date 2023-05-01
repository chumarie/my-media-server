import { useCallback, useEffect, useState, useRef } from 'react';

import { categoryService } from '@application/services/CategoryService';
import { Category } from '@domain/models/Category';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import Slider from '@presentation/atomic-design/organisms/Slider';
import ButtonWrapper from '@presentation/atomic-design/molecules/ButtonWrapper';
import BaseLayout from '@templates/BaseLayout/BaseLayout';

import { SelectedFilm } from './components/SelectedFilm';

const HomePage = () => {
    const [movieList, setMovieList] = useState<Category[]>([]);

    const sliderMovieRef = useRef<any>(null);

    const handleMoviePrevButtonClick = () => {
        sliderMovieRef.current.slickPrev();
    };

    const handleMovieNextButtonClick = () => {
        sliderMovieRef.current.slickNext();
    };

    const getDataList = useCallback(async () => {
        try {
            const responseMovies = await categoryService(categoryRepository(httpAxios)).getCategoryById('4');
            setMovieList(responseMovies);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getDataList();
    }, []);

    return (
        <BaseLayout>
            <div className='w-full flex'>
                <div className='flex-1'>
                    <SelectedFilm />
                    <div className='absolute bottom-[20px] z-10 px-5'>
                        <div className='section-heading flex justify-between py-5 px-0 items-center'>
                            <ButtonWrapper onPrevButtonClick={handleMoviePrevButtonClick} onNextButtonClick={handleMovieNextButtonClick} />
                        </div>
                        <Slider sliderRef={sliderMovieRef} items={movieList} />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default HomePage;
