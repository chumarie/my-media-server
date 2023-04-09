import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Category } from '@domain/models/Category';
import { categoryService } from '@application/services/CategoryService';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';

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

    console.log('Category', categories)


    return (
        <div>
            <h2>List of categories</h2>
            {/* <video src="http://192.168.1.5:8096/emby/Videos/105/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6" controls>
                Your browser does not support the video tag.
            </video> */}
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <button onClick={() => navigate(`/category/${category.id}`)}>
                            {category.name}
                        </button>
                        <img src={category.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
