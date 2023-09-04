import styled from '@emotion/styled';
import { Input as AntInput } from 'antd';

import { AppThemeInterface } from '@contexts/ThemeContext';

const Search = styled(AntInput.Search)<{ theme?: AppThemeInterface }>`
  width: 100%;
  max-width: unset;

  @media (min-width: ${({ theme }) => theme.breakPointSize.tabletS}) {
    max-width: 400px;
  }
`;

export default {
  Search,
};
