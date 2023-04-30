import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { categoryService } from '@application/services/CategoryService';
import { Category } from '@domain/models/Category';
import { API_CATEGORY } from '@infrastructure/constants/global';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import BaseLayout from '@presentation/atomic-design/templates/BaseLayout/BaseLayout';
import MediaList from '@presentation/atomic-design/organisms/MediaList';
import H2 from '@presentation/atomic-design/atoms/typography/H2';

const CategoryListPage = () => {
    const { categoryId } = useParams<string>();
    const [mediaList, setMediaList] =  useState<Category[] | null>(null);

    const getCategoryList = useCallback(async (categoryId: string | undefined) => {
        try {
            const responseMedia = await categoryService(categoryRepository(httpAxios)).getCategoryById(categoryId);
            setMediaList(responseMedia);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    useEffect(() => {
        getCategoryList(categoryId);
    }, [categoryId]);

    if(!mediaList || !categoryId) {
        return null;
    }

    const sectionTitle = API_CATEGORY[categoryId].label;

    return (
        <BaseLayout>      
            <div className="w-full flex px-5 pt-[100px] pb-5 flex-col">
                <div className="flex justify-center">
                    <H2>{sectionTitle}</H2>
                </div>
                <MediaList items={mediaList} />
            </div>
        </BaseLayout>
    );
};

export default CategoryListPage;