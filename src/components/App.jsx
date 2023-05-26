import { ErrorPage } from 'pages/Error/ErrorPage';
import { MainLayouts } from './Layouts/MainLayouts';
import { Route, Routes } from 'react-router-dom';
import { Shop } from 'pages/Shop/Shop';
import { RestaurantMenu } from 'pages/RestaurantMenu/RestaurantMenu';
import { ShoppingCart } from 'pages/ShoppingCart/ShoppingCart';
import { PAGE_NAMES } from './router/path';

export const App = () => {
  return (
    <Routes>
      <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
        <Route path={PAGE_NAMES.shop} element={<Shop />} />
        <Route path={PAGE_NAMES.restaurant_menu} element={<RestaurantMenu />} />
        <Route path={PAGE_NAMES.shopping_cart} element={<ShoppingCart />} />
        <Route path="/*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
