import { NavLink } from 'react-router-dom';
import { Container } from 'utils/Container';
import {
  HeaderButton,
  HeaderLogo,
  HeaderLogoFirst,
  HeaderStyle,
  HeaderWrap,
  NavWrap,
} from './Header.styled';
import { PAGE_NAMES } from 'components/router/path';

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderWrap>
            <HeaderLogo href="*">
              <HeaderLogoFirst>Delivery</HeaderLogoFirst>App
            </HeaderLogo>
            <nav>
              <NavWrap>
                <NavLink to={PAGE_NAMES.shop}>
                  <HeaderButton>Shop</HeaderButton>
                </NavLink>
                <NavLink to={PAGE_NAMES.shopping_cart}>
                  <HeaderButton>Shopping Cart</HeaderButton>
                </NavLink>
              </NavWrap>
            </nav>
          </HeaderWrap>
        </Container>
      </HeaderStyle>
    </>
  );
};
