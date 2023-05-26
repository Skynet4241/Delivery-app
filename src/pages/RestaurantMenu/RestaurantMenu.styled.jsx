import styled from 'styled-components';

export const RestaurantMenuTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 800;
`;

export const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
`;
export const MenuItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 280px;
  padding-bottom: 24px;
  margin-right: 32px;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease, 0 2px 32px 0 rgba(0, 0, 0, 0.12) 0.3s ease;
  border-radius: 4px;
  height: auto;
  z-index: 1;
  &:hover {
    -webkit-box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.12);
    z-index: 2;
  }
`;
export const ItemTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin: 10px 0;
`;
export const ProductTitle = styled.h5`
  font-size: 18px;
  color: inherit;
`;

export const ItemTitle = styled.h5`
  font-size: 20px;
  color: #ee6344;
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 100%;
  background-color: #84c502;
  position: relative;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  &:hover {
    background-color: #52aa00;
  }
`;
export const ButtonIcon = styled.span`
  color: #fff;
  font-size: 22px;
`;
export const ButtonText = styled.p`
  font-size: 18px;
`;

export const ButtonAddToOrder = styled.button`
  width: 192px;
  height: 40px;
  border-radius: 20px;
  background-color: #84c502;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s ease;
  line-height: 1;
  text-align: center;
  border: none;
  margin-top: 20px;
  &:hover {
    background-color: #52aa00;
  }
`;

export const ButtonAddToOrderText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const QuantityOfOrderedItems = styled.h5`
  font-size: 18px;
  font-weight: 600;
  color: blue;
`;

export const QuantityOfOrderedItemsSpan = styled.span`
  color: red;
`;
