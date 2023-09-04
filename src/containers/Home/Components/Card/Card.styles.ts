import styled from '@emotion/styled';

import { AppThemeInterface } from '@contexts/ThemeContext';

const Card = styled.div<{ theme?: AppThemeInterface }>`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: 0px 5px 20px rgb(153 166 186 / 25%);
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

    h2 {
      text-decoration: underline;
    }
  }

  .ant-image {
    align-self: center;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
`;

const Description = styled.p``;

const Date = styled.p`
  font-weight: 300;
  margin-top: 1.5em;
`;

const Origin = styled.span`
  text-transform: capitalize;
`;

const Author = styled.p`
  margin-top: auto;
  font-weight: 300;
`;

const CardContainer = styled.div<{ $itemsNotFound: boolean; theme?: AppThemeInterface }>`
  display: ${({ $itemsNotFound }) => ($itemsNotFound ? 'flex' : 'grid')};

  flex-direction: column;

  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakPointSize.laptopS}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default {
  Card,
  Title,
  Description,
  Date,
  Author,
  Origin,
  CardContainer,
};
