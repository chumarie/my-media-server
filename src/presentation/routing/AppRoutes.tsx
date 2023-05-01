import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "@presentation/pages/home-page/HomePage";
import CategoryListPage from '@presentation/pages/category-list-page/CategoryListPage';
import DetailPage from '@presentation/pages/detail-page/DetailPage';

console.log('app file');
const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="https://chumarie.github.io/my-media-server/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryListPage />} />
          <Route path="/category/:categoryId/item/:itemId" element={<DetailPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;