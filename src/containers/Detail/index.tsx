import { Empty, Image, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { env } from '@environment/env';

import FeedService, { DetailItemInterface } from '@services/Feeds';

import { fixFeedsObjectKeys, getCurrentPathSnippets } from '@utils/utilities';

import Breadcrumbs from '@components/commons/Breadcrumb';

import DetailStyles from './Detail.styles';

function createMarkup(content) {
  return {
    __html: content,
  };
}

const imageKeys = ['thumbnail', 'urlToImage'];

function Detail({
  current = { origin: null, rssId: null, url: null },
}: {
  current?: { origin: string | null; rssId: string | null; url: string[] | null };
}) {
  const [selectedRSS, setSelectedRSS] = useState<DetailItemInterface>();
  const [loading, setLoading] = useState(false);

  const urlParams = useParams();
  const location = useLocation();
  const origin = current?.origin || String(urlParams.origin);
  const rssId = current?.rssId || String(urlParams.rssId);

  useEffect(() => {
    getFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFeed = async () => {
    setLoading(true);
    const data = await FeedService.getFeedByUrl(env.feeds[origin].url, env.feeds[origin].convertToJSON);

    if (data.articles || data.items) {
      const rssFeeds = fixFeedsObjectKeys([{ origin: origin, ...data }]);

      const selectedFeed = rssFeeds
        ?.map((feed) => ({ key: `${feed.title.replace(/\s/g, '-')}-${origin}`, ...feed }))
        .find((feed) => feed.key === rssId);

      if (selectedFeed) {
        setSelectedRSS(selectedFeed);
      }
    }

    setLoading(false);
  };

  const getComponent = () => {
    let includesImage = false;
    if (selectedRSS) {
      includesImage = Object.keys(selectedRSS).some((key) => imageKeys.includes(key) && selectedRSS[key]);
    }
    const customImage = includesImage ? (
      <Image src={selectedRSS?.urlToImage || selectedRSS?.thumbnail} preview={false} style={{ width: '100%', marginBottom: '0.5em' }} />
    ) : null;

    const cardContent = selectedRSS ? (
      <>
        {customImage}
        <DetailStyles.Title>{selectedRSS?.title}</DetailStyles.Title>
        <DetailStyles.Subtitle>
          {selectedRSS?.author} - {selectedRSS?.publishDate}
        </DetailStyles.Subtitle>
        <DetailStyles.Separator />
        <DetailStyles.Content dangerouslySetInnerHTML={createMarkup(selectedRSS?.content)}></DetailStyles.Content>
      </>
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );

    return (
      <DetailStyles.Container>
        <Breadcrumbs currentPath={current?.url || getCurrentPathSnippets(location)} />
        {loading ? <Spin style={{ minHeight: '70vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }} /> : cardContent}
      </DetailStyles.Container>
    );
  };

  return getComponent();
}

export default Detail;
