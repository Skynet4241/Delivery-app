import { Container } from 'utils/Container';
import { FooterHeading, FooterStyle } from './Footer.styled';

export const Footer = () => {
  return (
    <>
      <FooterStyle>
        <Container>
          <div>
            <FooterHeading>© 2023 | All Rights Reserved</FooterHeading>
          </div>
        </Container>
      </FooterStyle>
    </>
  );
};
