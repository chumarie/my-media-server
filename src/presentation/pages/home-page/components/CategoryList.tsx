import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Category } from '@domain/models/Category';
import { categoryService } from '@application/services/CategoryService';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';

import PlayButton from '@presentation/assets/play.png';

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
        <h2>All categories</h2>
        <ul>
            {categories.map(category => (
                category.type === 'movies' && (
                    <li key={category.id} onClick={() => navigate(`/category/${category.id}`)}>
                            <img src={category.image}/>
                        <div className='more-content-footer'>
                        <img className='play-icon' src={PlayButton}/>
                            {category.name}
                        </div>
                    </li>
                )
            ))}
        </ul>
    </div>
    );
};
