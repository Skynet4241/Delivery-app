import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: #f7d6d6;
`;

export const HeaderWrap = styled.div`
  display: flex;
  padding: 22px 0;
  align-items: center;
`;
export const HeaderLogo = styled(NavLink)`
  display: block;
  font-weight: 800;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: red;
  margin-right: 30px;
`;

export const HeaderLogoFirst = styled.span`
  color: blue;
`;
export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;
export const NavWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const HeaderNavText = styled.p`
  font-size: 30px;
  font-weight: 800;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.64);
  cursor: pointer;
  transition: color 0.2s ease;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 1px;
  &:hover {
    color: #ee6344;
  }
`;
export const ShoppingCart = styled(NavLink)`
  transition: scale 0.25s ease-in-out;
  &:hover {
    scale: 1.21;
  }
`;
