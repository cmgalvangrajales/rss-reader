// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled';

import { AppThemeInterface } from '../contexts/ThemeContext';

const Container = styled.div<{ theme?: AppThemeInterface }>(({ theme }) => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: theme.palette.blue100,
}));

function NotFoundPage() {
  return <Container>404 Not Found</Container>;
}

export default NotFoundPage;
