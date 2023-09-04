import { render, screen } from '@config/tests/utils';

import CustomBreadcrum from '../index';

const mockPath = ['test'];
const defaultComponent = <CustomBreadcrum currentPath={mockPath} />;

describe('<Breadcrumb />', () => {
  test('component is rendering', () => {
    render(defaultComponent);

    const breadcrumItem = screen.getByText(mockPath[0]);
    expect(breadcrumItem).toBeInTheDocument();
  });

  test('component has anchor tag with redirect', () => {
    render(defaultComponent);

    const breadcrumItem = screen.getByRole('link', { name: 'test' });
    expect(breadcrumItem).toHaveAttribute('href', '/test');
  });
});
