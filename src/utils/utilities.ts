import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import type { Location } from 'react-router-dom';

import { DetailItemInterface, FeedByURLResponseInterface } from '@services/Feeds';

dayjs.extend(utc);
dayjs.extend(relativeTime);

/**
 * This function fix the created date of the feeds
 * formating them and adding the relative time of that date
 * til the current date.
 *
 * @param feed Feeds from RSS pages like xatakandroid
 * @returns DetailItemInterface
 */
const fixFeedCreationDates = (feed: DetailItemInterface): DetailItemInterface => {
  const feedToFix = feed;
  if (feed.publishedAt || feed.pubDate) {
    const feedDate = feed.publishedAt || feed.pubDate;
    feedToFix.publishDate = dayjs.utc(feedDate).format('YYYY-MM-DD HH:mm:ss');
    feedToFix.publishedAgo = dayjs.utc(feedDate).fromNow();

    delete feedToFix[feedToFix.publishedAt ? 'publishedAt' : 'pubDate'];
  }
  return feedToFix;
};

/**
 * This function will fix the feed object key
 * in order to have the same feed key for all the rss pages
 * and be able to identify the origin of each feed.
 *
 * @param feeds Feeds from RSS pages like xatakandroid
 * @returns DetailItemInterface[]
 */
export const fixFeedsObjectKeys = (feeds: FeedByURLResponseInterface[]): DetailItemInterface[] => {
  const items: DetailItemInterface[] = [];

  Object.keys(feeds).forEach((key) => {
    const tempItems = feeds[key].items ? feeds[key].items : feeds[key].articles;

    if (tempItems && tempItems.length > 0) {
      tempItems.forEach((element) => {
        items.push(fixFeedCreationDates({ ...element, origin: feeds[key].origin, publishDate: '', publishedAgo: '' }));
      });
    }
  });

  return items;
};

/**
 * This function uses regex to validate if the string includes posible html tags
 *
 * @param value string to validate
 * @returns Boolean
 */
export const includesHTML = (value: string): boolean => {
  if (value && value !== '') {
    const regexForHTML = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
    return regexForHTML.test(value);
  }

  return false;
};

/**
 * This function fragments the current path
 *
 * @returns String fragmented path
 */
export function getCurrentPathSnippets(location: Location, fakePath: string | null = null) {
  if (fakePath) {
    return fakePath.split('/').filter((i) => i);
  }

  return location.pathname.split('/').filter((i) => i);
}
