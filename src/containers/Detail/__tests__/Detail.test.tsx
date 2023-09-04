import { render, screen } from '@config/tests/utils';

import Detail from '../index';

const defaultComponent = (
  <Detail
    current={{
      origin: 'newsapi',
      rssId: 'Bitcoin-just-had-its-2nd-straight-losing-month-as-crypto-sold-off-in-August-along-with-stocks-and-bonds-newsapi',
      url: ['/', 'newsapi', 'test'],
    }}
  />
);

describe('<Detail />', () => {
  test('breadcrumItem exists', () => {
    render(defaultComponent);
    const breadcrumItem = screen.getByText('home');

    expect(breadcrumItem).toBeInTheDocument();
  });
});
