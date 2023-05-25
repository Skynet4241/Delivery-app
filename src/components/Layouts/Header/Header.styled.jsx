import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: #9e8f90;
`;

export const HeaderWrap = styled.div`
  display: flex;
  padding: 22px 0;
`;

export const HeaderLogo = styled.a`
  display: block;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: red;
  margin-right: 30px;
`;

export const HeaderLogoFirst = styled.span`
  color: blue;
`;

export const NavWrap = styled.nav`
  display: flex;
  gap: 15px;
`;

export const HeaderButton = styled.button`
  width: 128px;
  height: 38px;
  display: inline-block;
  font-weight: 700;
  color: rgb(255, 255, 255);
  background-image: linear-gradient(
    to right bottom,
    rgb(233, 142, 212),
    rgb(86, 46, 103)
  );
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;
