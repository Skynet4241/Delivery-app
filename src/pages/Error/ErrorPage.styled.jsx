import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ErrorPageTitle = styled.h2`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 900;
  font-size: 60px;
`;

export const ErrorPageNotFoundText = styled.h4`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 30px;
`;

export const ErrorPageText = styled.p`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  text-align: center;
`;

export const ErrorPageButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 56px;
  background: #fa3c45;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  border: none;
  margin-bottom: 20px;
  text-decoration: none;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);
  }
`;
