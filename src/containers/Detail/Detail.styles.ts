import styled from '@emotion/styled';

import { AppThemeInterface } from '@contexts/ThemeContext';

import { ContainerInterface } from './Detail.types';

const Container = styled.div<ContainerInterface>`
  display: flex;
  flex-direction: column;
  min-height: 85vh;
  max-width: 700px;
  margin: 0 auto;

  ${({ $justify }) => ($justify ? `justify-content: ${$justify}` : '')};
`;

const Content = styled.div`
  text-align: justify;

  & img {
    max-width: 700px;
  }
`;

const Title = styled.h1<{ theme?: AppThemeInterface }>`
  font-size: 1.3em;
  font-weight: 900;

  @media (min-width: ${({ theme }) => theme.breakPointSize.laptopS}) {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  align-self: flex-start;
`;

const Separator = styled.hr`
  width: 100%;
  border-top: 1px solid rgb(187, 187, 187);
  margin-bottom: 2em;
`;

export default {
  Container,
  Content,
  Title,
  Subtitle,
  Separator,
};
