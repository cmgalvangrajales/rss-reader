export const env = {
  production: false,
  app: {
    website: '',
  },
  feeds: {
    xatakandroid: {
      url: 'https://www.xatakandroid.com/tag/feeds/rss2.xml',
      imageKey: 'thumbnail',
      convertToJSON: true,
    },
    newsapi: {
      url: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=e221cf678aa243a68d3c44bb99423109',
      imageKey: 'urlToImage',
      convertToJSON: false,
    },
  },
};
