import { CheckOutlined, HomeOutlined, StarOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import message from './Sider.message';
import AntdSider from './Sider.styles';

const items: MenuProps['items'] = [
  { label: <FormattedMessage {...message.allArticles} />, icon: <HomeOutlined />, path: '/' },
  { label: <FormattedMessage {...message.readLater} />, icon: <StarOutlined />, path: '/read-later' },
  { label: <FormattedMessage {...message.read} />, icon: <CheckOutlined />, path: '/already-read' },
].map(({ label, icon, path }) => ({
  key: path,
  icon,
  label,
}));

const Sider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`${e.key}`);
  };

  const current = location.pathname === '/' || location.pathname === '' ? '/' : location.pathname;

  return (
    <AntdSider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" items={items} selectedKeys={[current]} onClick={onClick} />
    </AntdSider>
  );
};

export default Sider;
