import styled from '@emotion/styled';

import { AppThemeInterface } from '@contexts/ThemeContext';

const Container = styled.div<{ theme?: AppThemeInterface }>`
  padding: 20px;
  background-color: ${({ theme }) => theme.palette.gray10};
  overflow-x: auto;
`;

export default {
  Container,
};
