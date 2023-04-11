import { useParams, useNavigate } from 'react-router-dom';

import { categoryService } from '@application/services/CategoryService';
import { Category } from '@domain/models/Category';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import BaseLayout from '@templates/BaseLayout/BaseLayout';
import { useCallback, useEffect, useState } from 'react';

import { CategoryList } from './components/CategoryList';

const HomePage = () => {
  const [animationList, setAnimationList] =  useState<Category[]>([]);
  const [filmList, setFilmList] =  useState<Category[]>([]);
  const [resumeList, setResumeList] =  useState<Category[]>([]);

  const navigate = useNavigate();

  const getCategoryList = useCallback(async () => {
      try {

              const responseAnimations = await categoryService(categoryRepository(httpAxios)).getCategoryById('6');
              setAnimationList(responseAnimations.slice(0, 6));

              const responseFilms = await categoryService(categoryRepository(httpAxios)).getCategoryById('4');
              setFilmList(responseFilms.slice(0, 6));

              const responseResume = await categoryService(categoryRepository(httpAxios)).getResumes();
              setResumeList(responseResume.slice(0, 6));
          
      } catch (exception) {
          console.error(exception);
      }
  }, []);

  useEffect(() => {
      getCategoryList();
  }, []);

  console.log('animationList', animationList)
  console.log('filmList', resumeList)
    return (
        <BaseLayout>
          <div className="sidebar">
            <CategoryList />
          </div>
          <div className="container">
            <div>
              <h2>New animation</h2>
              <ul>
                  {resumeList.map(animation => (
                      <li key={animation.id} onClick={() => navigate(`/category/${animation.id}/item/6`)}>
                          <img src={animation.image} />
                      </li>
                  ))}
              </ul>
            </div>
            <div>
              <h2>New Films</h2>
              <ul>
                  {filmList.map(film => (
                      <li key={film.id} onClick={() => navigate(`/category/${film.id}/item/4`)}>
                          <img src={film.image} />
                      </li>
                  ))}
              </ul>
            </div>
          </div>
        </BaseLayout>

    );
};

export default HomePage;