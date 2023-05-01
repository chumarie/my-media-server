import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { categoryService } from '@application/services/CategoryService';
import { Category } from '@domain/models/Category';
import { categoryRepository } from '@infrastructure/repositories/categoryRepository';
import { httpAxios } from '@infrastructure/instances/httpAxios';
import avatar from '@presentation/assets/avatar.jpeg';
import Logo from '@presentation/atomic-design/atoms/Logo';

const Header = () => {
    const [categories, setCategories] = useState<Category[] | null>();

    const navigate = useNavigate();

    const getCategories = useCallback(async () => {
        try {
            const responseProducts = await categoryService(categoryRepository(httpAxios)).getCategories();
            setCategories(responseProducts);
        } catch (exception) {
            console.error(exception);
        }
    }, []);

    const handleLogoClick = () => {
        navigate('/');
    };

    useEffect(() => {
        getCategories();
    }, []);

    if (!categories) {
        return null;
    }

    return (
        <header className='p-grid z-20 flex fixed w-full'>
            <div className='sm:flex'>
                <Logo onLogoClick={handleLogoClick} />
                <nav className='flex items-center mt-3 sm:mt-0'>
                    <ul className='flex gap-8'>
                        {categories.map(
                            category =>
                                category.type === 'movies' && (
                                    <li key={category.id} className='cursor-pointer' onClick={() => navigate(`/category/${category.id}`)}>
                                        {category.name}
                                    </li>
                                )
                        )}
                    </ul>
                </nav>
            </div>
            <div className='flex-1 flex justify-end gap-4 items-center'>
                <img className='h-[40px] rounded-full' src={avatar} alt='avatar-profile' />
            </div>
        </header>
    );
};

export default Header;
