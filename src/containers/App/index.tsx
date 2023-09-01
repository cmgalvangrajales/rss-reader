import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';

import NotFound from '@pages/404';
import AlreadyReadPage from '@pages/AlreadyRead';
import DetailPage from '@pages/Detail';
import HomePage from '@pages/Home';
import ReadLaterPage from '@pages/ReadLater';

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
            <Route path="/:rssId" element={<DetailPage />} />
            <Route path="/read-later" element={<ReadLaterPage />} />
            <Route path="/already-read" element={<AlreadyReadPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
