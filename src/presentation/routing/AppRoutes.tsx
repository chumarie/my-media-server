import { Route, Routes, HashRouter } from 'react-router-dom';

import HomePage from '@presentation/pages/HomePage';
import DetailPage from '@presentation/pages/DetailPage';
import MediaByCategoryPage from '@presentation/pages/MediaByCategoryPage';

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/category/:categoryId' element={<MediaByCategoryPage />} />
                <Route path='/category/:categoryId/item/:itemId' element={<DetailPage />} />
            </Routes>
        </HashRouter>
    );
};

export default AppRoutes;
