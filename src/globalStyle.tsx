import { Global } from '@emotion/react';
import 'antd/dist/reset.css';

const globalStyle = () => (
  <Global
    styles={[
      {
        body: {
          padding: 0,
          margin: 0,
          fontFamily: [
            '-apple-system',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
          ],
        },
      },
    ]}
  />
);

export default globalStyle;
