import { render, screen } from '@config/tests/utils';

import Home from '../index';

const defaultComponent = <Home />;

describe('<Home />', () => {
  test('breadcrumItem exists', () => {
    render(defaultComponent);
    const breadcrumItem = screen.getByText('home');

    expect(breadcrumItem).toBeInTheDocument();
  });
});
