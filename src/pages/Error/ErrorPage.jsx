import { PAGE_NAMES } from 'components/router/path';
import {
  ErrorPageButton,
  ErrorPageNotFoundText,
  ErrorPageText,
  ErrorPageTitle,
  ErrorPageWrap,
} from './ErrorPage.styled';
import { Container } from 'utils/Container';

export const ErrorPage = () => {
  <>
    <Container>
      <ErrorPageWrap>
        <ErrorPageTitle>Ooops!</ErrorPageTitle>
        <ErrorPageNotFoundText>404 page not found</ErrorPageNotFoundText>
        <ErrorPageText>
          The page you are looking for might have been removed <br />
          had its name changed or is temporarily unavailable
        </ErrorPageText>
        <ErrorPageButton to={PAGE_NAMES.shop}>GO TO SHOP</ErrorPageButton>
      </ErrorPageWrap>
    </Container>
  </>;
};
