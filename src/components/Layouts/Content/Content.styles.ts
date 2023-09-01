import styled from '@emotion/styled';

import { AppThemeInterface } from '@contexts/ThemeContext';

const Container = styled.div<{ theme?: AppThemeInterface }>`
  padding: 0px;
  background-color: ${({ theme }) => theme.palette.background};
`;

export default {
  Container,
};
