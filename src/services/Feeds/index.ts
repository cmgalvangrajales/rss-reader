import {
  ArticleInterface,
  BasicFeedInterface,
  DetailItemInterface,
  FeedByURLResponseInterface,
  ItemInterface,
} from './domain/freeds.types';
import * as FeedService from './proxy/feeds.service';

export default FeedService;
export type { BasicFeedInterface, FeedByURLResponseInterface, ItemInterface, ArticleInterface, DetailItemInterface };
