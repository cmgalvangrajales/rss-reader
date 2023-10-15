import { Empty, Image, Spin } from 'antd';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';

import { env } from '@environment/env';

import FeedService from '@services/Feeds';

import { fixFeedsObjectKeys, getCurrentPathSnippets } from '@utils/utilities';

import Breadcrumbs from '@components/commons/Breadcrumb';

import DetailStyles from './Detail.styles';

const imageKeys = ['thumbnail', 'urlToImage'];

function createMarkup(content) {
  return {
    __html: content,
  };
}

function Detail({
  current = { origin: null, rssId: null, url: null },
}: {
  current?: { origin: string | null; rssId: string | null; url: string[] | null };
}) {
  const urlParams = useParams();
  const location = useLocation();
  const origin = current?.origin || String(urlParams.origin);
  const rssId = current?.rssId || String(urlParams.rssId);
  let includesImage = false;

  const feechFeed = async () => {
    return await FeedService.getFeedByUrl(env.feeds[origin].url, env.feeds[origin].convertToJSON);
  };

  const { data, isLoading } = useQuery('feedByUrl', feechFeed);
  const rssFeeds = fixFeedsObjectKeys([{ origin: origin, ...data }]);

  const selectedRSS = rssFeeds
    ?.map((feed) => ({ key: `${feed.title.replace(/\s/g, '-')}-${origin}`, ...feed }))
    .find((feed) => feed.key === rssId);

  if (selectedRSS) {
    includesImage = Object.keys(selectedRSS).some((key) => imageKeys.includes(key) && selectedRSS[key]);
  }
  const customImage = includesImage ? (
    <Image src={selectedRSS?.urlToImage || selectedRSS?.thumbnail} preview={false} style={{ width: '100%', marginBottom: '0.5em' }} />
  ) : null;

  const getContent = () => {
    if (isLoading) {
      return <Spin style={{ minHeight: '70vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }} />;
    }

    if (selectedRSS) {
      return (
        <>
          {customImage}
          <DetailStyles.Title>{selectedRSS?.title}</DetailStyles.Title>
          <DetailStyles.Subtitle>
            {selectedRSS?.author} - {selectedRSS?.publishDate}
          </DetailStyles.Subtitle>
          <DetailStyles.Separator />
          <DetailStyles.Content dangerouslySetInnerHTML={createMarkup(selectedRSS?.content)}></DetailStyles.Content>
        </>
      );
    }

    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  };

  return (
    <DetailStyles.Container>
      <Breadcrumbs currentPath={current?.url || getCurrentPathSnippets(location)} />
      {getContent()}
    </DetailStyles.Container>
  );
}

export default Detail;
