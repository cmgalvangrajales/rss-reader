import styled from '@emotion/styled';
import { Layout } from 'antd';

import { AppThemeInterface } from '@contexts/ThemeContext';

import { ContainerInterface } from './Header.types';

const Header = styled(Layout.Header)<{ theme?: AppThemeInterface }>`
  padding: 0 22px;
  background-color: ${({ theme }) => theme.palette.purple10};
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  &.multipleOptions {
    justify-content: space-between;
  }
`;

const Container = styled.div<ContainerInterface>`
  display: flex;
  flex: 1;
  gap: 8px;
  color: ${({ theme }) => theme.palette.white};
  ${({ $justify }) => ($justify ? `justify-content: ${$justify}` : '')};
  ${({ $centerItems }) => ($centerItems ? `align-items: center` : '')};

  &.headerLogo {
    @media (min-width: ${({ theme }) => theme.breakPointSize.laptopLG}) {
      display: none;
    }
  }
`;

export default {
  Header,
  Container,
};
