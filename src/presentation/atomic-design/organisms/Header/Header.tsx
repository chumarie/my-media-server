import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { Category } from '@domain/models/Category';
import avatar from '@presentation/assets/avatar.jpeg';
import search from '@presentation/assets/search.png';
import { categoryService } from '@application/services/CategoryService';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const navigate = useNavigate();

  const getCategories = useCallback(async () => {
      try {
          const responseProducts = await categoryService(categoryRepository(httpAxios)).getCategories();
          setCategories(responseProducts);
      } catch (exception) {
          console.error(exception);
      }
  }, []);

  useEffect(() => {
    getCategories();
}, []);

  return (
    <header className="p-grid border-b flex">
      <div className="w-sidebar flex">
        <svg className="fill-brand w-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 923.1 249.5"><path d="M480.9 88.7h53.4v39h-53.4v88.4h-38.3V0h108.9v39h-70.7v49.7zm134 93.3c22.2.5 44.6 2.2 66.3 3.4v38.5c-34.8-2.2-69.7-4.4-105.2-5.1V0h39v182zm99.1 44.6c12.4.7 25.6 1.5 38.2 2.9V0H714v226.6zM923.1 0l-49.5 118.6 49.5 130.8c-14.6-1.9-29.2-4.6-43.9-7.1l-28-72.1-28.5 66.3c-14.1-2.4-27.8-3.2-41.9-5.1L831 117.2 785.7 0h41.9l25.6 65.5L880.4 0h42.7zM0 .5h137.9v35.2H88.3v201.5L49.5 242V35.7H0V.5zm197.5 96.7 53.2-3V127l-53.2 3v64.2l67-4v32.2s-38.2 2.2-52.9 3.3-52.9 4.3-52.9 4.3V.5h105.7v32.8h-67v63.9zm141.7 36.6-12 20.3v66.4s-24.4 1-21.1.8-17.6.9-17.6.9V.5h38.8v96h.7l50-96h38.8l-53.9 98.8 52.2 119s-21.3.3-20.9.3c.4 0-18.6.4-18.6.4l-36.4-85.2z"/></svg>
      </div>  
      <nav className="flex items-center">
          <ul className="flex gap-8">
          {categories.map(category => (
            category.type === 'movies' && (
                <li onClick={() => navigate(`/category/${category.id}`)}>
                  {category.name}
                </li>
            )
          ))}
          </ul>
      </nav>
      <div className="flex-1 flex justify-end gap-4 items-center">
        <img className="w-6 h-6" src={search} alt="search-icon" />
        <img className="h-[40px] rounded-full" src={avatar} alt="" />
      </div>
    </header>
  );
};

export default Header;