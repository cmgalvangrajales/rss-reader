import { DetailItemInterface } from '@services/Feeds';

export const orderFeedByCreationDate = (feeds: DetailItemInterface[]): DetailItemInterface[] => {
  feeds.sort((a: DetailItemInterface, b: DetailItemInterface) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());
  return feeds;
};

export const getShortenDescription = (description: string): string => {
  const maxDescriptionSize = 100;
  return description.length > maxDescriptionSize ? `${description.substring(0, maxDescriptionSize)}...` : description;
};
