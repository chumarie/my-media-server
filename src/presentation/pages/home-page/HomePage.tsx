import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';

import { categoryService } from '@application/services/CategoryService';
import { Category } from '@domain/models/Category';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import BaseLayout from '@templates/BaseLayout/BaseLayout';


import H2 from '@presentation/atomic-design/atoms/typography/H2';

import { CategoryList } from './components/CategoryList';

const HomePage = () => {
  const [animationList, setAnimationList] =  useState<Category[]>([]);
  const [filmList, setFilmList] =  useState<Category[]>([]);
  const [resumeList, setResumeList] =  useState<Category[]>([]);

  const navigate = useNavigate();

  const getCategoryList = useCallback(async () => {
      try {

              const responseAnimations = await categoryService(categoryRepository(httpAxios)).getCategoryById('6');
              setAnimationList(responseAnimations);

              const responseFilms = await categoryService(categoryRepository(httpAxios)).getCategoryById('4');
              setFilmList(responseFilms);

              const responseResume = await categoryService(categoryRepository(httpAxios)).getResumes();
              setResumeList(responseResume);
          
      } catch (exception) {
          console.error(exception);
      }
  }, []);

  useEffect(() => {
      getCategoryList();
  }, []);

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

    return (
        <BaseLayout>
          <div className="w-sidebar border-r p-grid">
            <CategoryList />
          </div>
          <div className="container px-10 w-full">
            <div>
              <H2 text='New animation' />
              <Slider {...settings}>
                {animationList.map(animation => (
                      <li key={animation.id} onClick={() => navigate(`/category/${animation.id}/item/6`)}>
                          <img src={animation.image} />
                      </li>
                  ))}
              </Slider>
            </div>
            <div>
              <H2 text='New Films' />
              <Slider {...settings}>
                {filmList.map(film => (
                      <li key={film.id} onClick={() => navigate(`/category/${film.id}/item/4`)}>
                          <img src={film.image} />
                      </li>
                ))}
              </Slider>
            </div>
          </div>
        </BaseLayout>

    );
};

export default HomePage;