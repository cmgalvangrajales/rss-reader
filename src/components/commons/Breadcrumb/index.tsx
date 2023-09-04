import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import BreadcrumStyle from './Breadcrum.styles';
import { getPath } from './Breadcrum.utils';

interface CustomBreadcrumInterface {
  currentPath: string[];
  includeSpace?: boolean;
}

function getItemList(pathSnippets: string[]) {
  return pathSnippets.map((route, i) => {
    const url = `/${pathSnippets.slice(1, i + 1).join('/')}`;
    const homePath = <HomeOutlined />;
    const routePath = getPath(route);

    return {
      title: (
        <Link to={url}>
          {route === '/' && homePath} {routePath}
        </Link>
      ),
    };
  });
}

export function CustomBreadcrum({ currentPath, includeSpace = true }: CustomBreadcrumInterface) {
  if (currentPath[0] !== '/') {
    currentPath.unshift('/');
  }

  return (
    <BreadcrumStyle.Container includeSpace={includeSpace}>
      <BreadcrumStyle.Base items={getItemList(currentPath)} />
    </BreadcrumStyle.Container>
  );
}

export default CustomBreadcrum;
