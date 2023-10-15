/* eslint-disable react-refresh/only-export-components */

/* eslint-disable import/named */
import { Empty, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { IntlShape, injectIntl } from 'react-intl';
import { useLocation, useParams } from 'react-router-dom';

import { env } from '@environment/env';

import FeedService, { DetailItemInterface, FeedByURLResponseInterface } from '@services/Feeds';

import { fixFeedsObjectKeys, getCurrentPathSnippets } from '@utils/utilities';

import Breadcrumbs from '@components/commons/Breadcrumb';

import Cards from './Components/Cards';
import Search from './Components/Search';
import message from './Home.message';
import HomeStyles from './Home.styles';

// TODO: implement useQuery
function Home({ intl: { formatMessage } }: { intl: IntlShape }) {
  const [feed, setFeed] = useState<DetailItemInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemToSeach, setItemToSeach] = useState<string | null>(null);
  const urlParams = useParams();
  const location = useLocation();
  const origin = urlParams.origin;

  // gets all feeds
  const getFeeds = async () => {
    setLoading(true);
    let feedsURLList = Object.keys(env.feeds).map((feedOrigin) => ({
      url: env.feeds[feedOrigin].url,
      origin: feedOrigin,
      convertToJSON: env.feeds[feedOrigin].convertToJSON,
    }));

    if (origin && feedsURLList.some((item) => item.origin === origin)) {
      feedsURLList = feedsURLList.filter((item) => item.origin === origin);
    }

    await Promise.all<FeedByURLResponseInterface>(
      feedsURLList.map(
        (feedItem) =>
          new Promise(async (resolve, reject) => {
            const data = await FeedService.getFeedByUrl(feedItem.url, feedItem.convertToJSON);

            if (data.articles || data.items) {
              resolve({ origin: feedItem.origin, ...data });
            } else {
              reject('Error');
            }
          }),
      ),
    ).then((results) => {
      setFeed(fixFeedsObjectKeys(results));
      setLoading(false);
    });
  };

  // filters feeds by title
  const filterFeeds = (value: string): void => {
    if (value && value.trim() !== '') {
      setItemToSeach(value);
    } else {
      setItemToSeach(null);
    }
  };

  useEffect(() => {
    getFeeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin]);

  if (!loading && feed?.length === 0) {
    return (
      <HomeStyles.Container>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </HomeStyles.Container>
    );
  }

  return (
    <HomeStyles.Container>
      <HomeStyles.HeaderContainer>
        <Breadcrumbs currentPath={getCurrentPathSnippets(location)} includeSpace={false} />
        <Search onSearch={filterFeeds} placeholder={formatMessage(message.searchPlaceHolder)} disabled={loading || feed?.length === 0} />
      </HomeStyles.HeaderContainer>
      {loading ? (
        <Spin style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' }} />
      ) : (
        <Cards feed={feed} itemToSeach={itemToSeach} />
      )}
    </HomeStyles.Container>
  );
}

export default injectIntl(Home);
