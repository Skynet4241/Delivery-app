import { NavLink } from 'react-router-dom';
import {
  HeaderLogo,
  HeaderLogoFirst,
  HeaderNavText,
  HeaderStyle,
  HeaderWrap,
  Nav,
  NavWrap,
  ShoppingCart,
} from './Header.styled';
import { PAGE_NAMES } from 'components/router/path';
import { Container } from 'utils/Container';

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderWrap>
            <HeaderLogo to={PAGE_NAMES.shop}>
              <HeaderLogoFirst>Delivery</HeaderLogoFirst>App
            </HeaderLogo>
            <Nav>
              <NavWrap>
                <NavLink to={PAGE_NAMES.shop}>
                  <HeaderNavText>Shop</HeaderNavText>
                </NavLink>
              </NavWrap>
              <NavWrap>
                <ShoppingCart to={PAGE_NAMES.shopping_cart}>
                  <img
                    src="https://ninjasushi.com.ua/img/cart.svg"
                    alt=""
                    width="55px"
                    height="55px"
                  />
                </ShoppingCart>
              </NavWrap>
            </Nav>
          </HeaderWrap>
        </Container>
      </HeaderStyle>
    </>
  );
};
