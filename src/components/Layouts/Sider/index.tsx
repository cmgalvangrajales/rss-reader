import { GroupOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useLocation, useNavigate } from 'react-router-dom';

import { env } from '@environment/env';

import message from './Sider.message';
import AntdSider from './Sider.styles';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem(<FormattedMessage {...message.allArticles} />, '/', <HomeOutlined />),
  ...Object.keys(env.feeds).map((item) => getItem(item, `/${item}`, <GroupOutlined />)),
];

const Sider = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`${e.key}`);
  };

  const current = location.pathname === '/' || location.pathname === '' ? '/' : location.pathname;

  return (
    <AntdSider breakpoint="lg" collapsedWidth="0">
      <Menu theme="dark" mode="inline" items={items} selectedKeys={[current]} onClick={onClick} />
    </AntdSider>
  );
};

export default Sider;
