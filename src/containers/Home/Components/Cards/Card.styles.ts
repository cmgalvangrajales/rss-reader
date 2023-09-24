import styled from '@emotion/styled';
import { Image as AntdImage } from 'antd';

import { AppThemeInterface } from '@contexts/ThemeContext';

const CardContainer = styled.div<{ theme?: AppThemeInterface }>`
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0px 5px 20px rgb(153 166 186 / 25%);
  border-radius: 10px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    h2 {
      text-decoration: underline;
    }
  }
`;

const Image = styled(AntdImage)`
  display: flex;
  width: auto !important;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
`;

const CardData = styled.div<{ theme?: AppThemeInterface }>`
  display: flex;
  padding: 16px;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.p``;

const Date = styled.p`
  font-weight: 300;
`;

const Origin = styled.span`
  text-transform: capitalize;
`;

const Author = styled.p`
  margin-top: auto;
  font-weight: 300;
`;

const Container = styled.div<{ $itemsNotFound: boolean; theme?: AppThemeInterface }>`
  display: ${({ $itemsNotFound }) => ($itemsNotFound ? 'flex' : 'grid')};

  flex-direction: column;

  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakPointSize.laptopS}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default {
  CardData,
  Title,
  Description,
  Date,
  Author,
  Origin,
  Container,
  CardContainer,
  Image,
};
