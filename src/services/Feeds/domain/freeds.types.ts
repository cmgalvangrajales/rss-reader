export interface BasicFeedInterface {
  title: string;
  description: string;
  author: string;
  content: string;
  origin: string;
}

export interface ItemInterface extends BasicFeedInterface {
  pubDate: string;
  thumbnail: string;
}

export interface ArticleInterface extends BasicFeedInterface {
  publishedAt: string;
  urlToImage: string;
}

export interface DetailItemInterface extends BasicFeedInterface {
  publishDate: string;
  pubDate?: string;
  thumbnail?: string;
  publishedAt?: string;
  urlToImage?: string;
  publishedAgo?: string;
}

export interface FeedByURLResponseInterface {
  origin?: string;
  items?: ItemInterface[];
  articles?: ArticleInterface[];
}
