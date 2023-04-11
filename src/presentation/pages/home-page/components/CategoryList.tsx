import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Category } from '@domain/models/Category';
import { categoryService } from '@application/services/CategoryService';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';

import PlayButton from '@presentation/assets/play.png';
import H2 from '@presentation/atomic-design/atoms/typography/H2';

export const CategoryList = () => {
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

    const handleCategoryClick = () => {

    }

    useEffect(() => {
        getCategories();
    }, []);

    
    return (
        <div className="category-list-page">
            <H2 text="All Categories" />
            <ul className="flex flex-col gap-3">
                {categories.map(category => (
                    category.type === 'movies' && (
                        <li className="relative" key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
                                <img src={category.image}/>
                            <div className='absolute flex b bottom-0 w-full items-center backdrop-blur gap-5 h-10 p-3'>
                            <img className='play-icon h-full' src={PlayButton}/>
                                {category.name}
                            </div>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};
