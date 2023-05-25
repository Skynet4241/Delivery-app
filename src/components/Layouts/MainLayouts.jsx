import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { MainLayoutsContainer } from './MainLayouts.styled';
import { Container } from 'utils/Container';

export const MainLayouts = () => {
  return (
    <MainLayoutsContainer>
      <Header />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </MainLayoutsContainer>
  );
};
