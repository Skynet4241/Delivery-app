import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 300px;
`;

export const FormButton = styled.button`
  height: 48px;
  width: 170px;
  border-radius: 24px;
  padding: 14px 20px;
  background-color: #ee6344;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border: 0;
  outline: 0;
  cursor: pointer;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
  &:hover {
    background-color: #cf452b;
  }
`;
