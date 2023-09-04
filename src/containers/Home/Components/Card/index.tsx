import { Empty, Image } from 'antd';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import news from '@assets/news.svg';

import { DetailItemInterface } from '@services/Feeds';

import { includesHTML } from '@utils/utilities';

import CardStyles from './Card.styles';
import { getShortenDescription, orderFeedByCreationDate } from './Card.utils';

const imageKeys = ['thumbnail', 'urlToImage'];

interface CardsInterface {
  feed: DetailItemInterface[];
  itemToSeach: string | null;
}

const Cards = ({ feed, itemToSeach }: CardsInterface): ReactNode => {
  const navigate = useNavigate();

  const handleRedirect = (rssID: string, origin: string) => {
    // rssID = title+origin
    navigate(`/${origin}/${rssID}`);
  };

  const getCards = (items: DetailItemInterface[]): ReactNode[] => {
    return items.map((item) => {
      const includesImage: boolean = Object.keys(item).some((key) => imageKeys.includes(key) && item[key]);
      const hasHtml: boolean = includesHTML(item.description);

      const itemKey = `${item.title.replace(/\s/g, '-')}-${item.origin}`;
      const imageStyles = { width: '100%', height: '150px' };

      return (
        <CardStyles.Card key={itemKey} onClick={() => handleRedirect(itemKey, item.origin)}>
          {includesImage ? (
            <Image src={item.urlToImage || item.thumbnail} preview={false} style={imageStyles} />
          ) : (
            <Image src={news} preview={false} style={imageStyles} />
          )}
          <CardStyles.Date>{item.publishedAgo}</CardStyles.Date>
          <CardStyles.Origin>{item.origin}</CardStyles.Origin>
          <CardStyles.Title>{item.title}</CardStyles.Title>
          {hasHtml ? null : <CardStyles.Description>{getShortenDescription(item.description)}</CardStyles.Description>}
          <CardStyles.Author>{item.author}</CardStyles.Author>
        </CardStyles.Card>
      );
    });
  };

  const allItems: DetailItemInterface[] = orderFeedByCreationDate(feed);
  const filteredItems = itemToSeach ? allItems.filter((item) => item.title.toLowerCase().includes(itemToSeach.toLowerCase())) : allItems;

  return (
    <CardStyles.CardContainer $itemsNotFound={filteredItems.length === 0}>
      {filteredItems.length > 0 ? getCards(filteredItems) : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </CardStyles.CardContainer>
  );
};

export default Cards;
