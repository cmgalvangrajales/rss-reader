import { Layout } from 'antd';
import React from 'react';

import ContentStyles from './Content.styles';

const { Content } = Layout;

interface ContentLayoutInterface {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutInterface) => {
  return (
    <Content style={{ overflow: 'auto' }}>
      <ContentStyles.Container>{children}</ContentStyles.Container>
    </Content>
  );
};

export default ContentLayout;
