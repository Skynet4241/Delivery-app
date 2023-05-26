import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainLayoutsContainer } from './MainLayouts.styled';

export const MainLayouts = () => {
  return (
    <MainLayoutsContainer>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </MainLayoutsContainer>
  );
};
