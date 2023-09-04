import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import NotFound from '@pages/404';
import DetailPage from '@pages/Detail';
import HomePage from '@pages/Home';

import { Content, Header, Sider } from '@components/Layouts';

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Sider />
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:origin" element={<HomePage />} />
            <Route path="/:origin/:rssId" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
