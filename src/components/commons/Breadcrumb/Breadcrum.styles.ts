import styled from '@emotion/styled';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

import { AppThemeInterface } from '@contexts/ThemeContext';

const Container = styled.div<{ includeSpace: boolean }>`
  ${({ includeSpace }) => (includeSpace ? 'margin-bottom: 22px;' : '')};
`;

const Base = styled(AntdBreadcrumb)<{ theme?: AppThemeInterface }>`
  @media (max-width: ${({ theme }) => theme.breakPointSize.tabletS}) {
    display: none !important;
  }

  a {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
      span {
        color: ${({ theme }) => theme.palette.primary};
      }
    }
    span {
      text-transform: capitalize;
      color: ${({ theme }) => theme.palette.tertiary200};
    }
  }

  span:last-child {
    a > span {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export default {
  Base,
  Container,
};
