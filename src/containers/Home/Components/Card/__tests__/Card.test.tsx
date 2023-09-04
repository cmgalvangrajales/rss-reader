import { render, screen } from '@config/tests/utils';

import { getShortenDescription } from '../Card.utils';
import CardComponent from '../index';

const feedMock = {
  source: {
    id: 'business-insider',
    name: 'Business Insider',
  },
  author: 'Filip De Mott',
  title: 'US stocks rise to gain for the week as traders assess August jobs report',
  description: 'Wage growth slowed in August and unemployment climbed, calming investors worried about more aggressive moves by the Fed.',
  url: 'https://markets.businessinsider.com/news/stocks/stock-market-news-today-equities-unemployment-august-jobs-report-inflation-2023-9',
  urlToImage: 'https://i.insider.com/648359eca460da00192438f5?width=1200&format=jpeg',
  content:
    'US Federal Reserve Chair Jerome Powell attends a press conference in Washington, DC, on March 22, 2023.Liu Jie/Xinhua via Getty Images\r\n<ul>\n<li>Stocks were mostly higher on Friday with major indexes… [+2735 chars]',
  origin: 'newsapi',
  publishDate: '2023-09-01 20:07:02',
  publishedAgo: '2 days ago',
};

const defaultComponent = <CardComponent feed={[feedMock]} itemToSeach={''} />;

describe('<Card />', () => {
  test('component is rendering', () => {
    render(defaultComponent);

    const cardTitle = screen.getByText(feedMock.title);
    expect(cardTitle).toBeInTheDocument();
  });

  test('component renders card short description', () => {
    render(defaultComponent);

    const cardTitle = screen.getByText(getShortenDescription(feedMock.description));
    expect(cardTitle).toBeInTheDocument();
  });
});
