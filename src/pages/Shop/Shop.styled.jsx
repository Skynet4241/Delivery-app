import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ShopList = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 20px;
`;

export const ShopWrap = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
