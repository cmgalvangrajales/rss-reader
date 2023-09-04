import styled from '@emotion/styled';
import { Layout } from 'antd';

import { AppThemeInterface } from '@contexts/ThemeContext';

const { Sider } = Layout;

const AntdSider = styled(Sider)<{ theme?: AppThemeInterface }>`
  .ant-layout-sider-zero-width-trigger {
    top: 12px;
    right: -46px;
    background-color: ${({ theme }) => theme.palette.blue70};
  }

  .ant-menu-item {
    text-transform: capitalize;

    &.ant-menu-item-selected {
      background-color: ${({ theme }) => theme.palette.blue70} !important;
      color: ${({ theme }) => theme.palette.white} !important;
    }
  }

  &,
  ul {
    background-color: ${({ theme }) => theme.palette.gray30} !important;

    li {
      &,
      .ant-menu-submenu-title {
        color: ${({ theme }) => theme.palette.blue70};
      }

      &:hover {
        background-color: ${({ theme }) => theme.palette.blue50} !important;
      }
    }
  }

  ul > li > span {
    margin-left: 10px;
  }
`;

export default AntdSider;
