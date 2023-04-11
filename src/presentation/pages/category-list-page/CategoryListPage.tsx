import { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Category } from '@domain/models/Category';
import { categoryService } from '@application/services/CategoryService';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';


const CategoryListPage = () => {
    const { categoryId } = useParams();
    const [categoryList, setCategoryList] =  useState<Category[]>([]);

    const navigate = useNavigate();

    const getCategoryList = useCallback(async () => {
        try {
            if(categoryId) {
                const responseProducts = await categoryService(categoryRepository(httpAxios)).getCategoryById(categoryId);
                setCategoryList(responseProducts);
            }
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getCategoryList();
    }, []);

    return (
        <div className="category-list-page">
            <h2>List of categories</h2>
            {/* <video src="http://27.78.33.65:8096/emby/Videos/105/stream.mkv?api_key=020eed90ed7e4b3f95d73dc3ed8f11b6" controls>
                Your browser does not support the video tag.
            </video> */}
            <ul>
                {categoryList.map(category => (
                    <li key={category.id}>
                        <button onClick={() => navigate(`/category/${category.id}/item/${categoryId}`)}>
                            {category.name}
                        </button>
                        <img src={category.image} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryListPage;