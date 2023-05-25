import { MainLayouts } from './Layouts/MainLayouts';
import { Route, Routes } from 'react-router-dom';
import { Shop } from 'pages/Shop/Shop';
import { ErrorPage } from 'pages/Error/ErrorPage';
import { RestaurantMenu } from 'pages/RestaurantMenu/RestaurantMenu';
import { ShoppingCart } from 'pages/ShoppingCart/ShoppingCart';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:shop" element={<RestaurantMenu />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
