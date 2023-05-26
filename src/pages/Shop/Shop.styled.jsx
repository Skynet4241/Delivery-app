import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ShopPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
`;

export const ShopTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 800;
`;

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
export const ShopItemWrap = styled.div`
  backface-visibility: hidden;
  border-radius: 10px;
  /* height: 100%; */
  overflow: hidden;
  transform: translateZ(0);
`;
export const ShopItemImageWrap = styled.div`
  align-items: flex-end;
  display: flex;
  height: 100%;
  rotate: 0.1;
  transition: transform 0.15s ease-in-out;
  width: 100%;
  &:hover {
    transform: scale(0.9);
  }
`;
export const ShopItemIfoWrap = styled.div`
  display: flex;
`;

export const ShopItemIfoText = styled.h5`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  color: black;
`;
