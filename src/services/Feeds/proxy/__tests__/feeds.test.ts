import { getFeedByUrl } from '../feeds.service';

const rssLink = 'https://www.xatakandroid.com/tag/feeds/rss2.xml';

describe('Services', () => {
  afterEach(async () => {
    await setTimeout(() => {}, 1000);
  });

  test('getFeedByUrl should return a JSON', async () => {
    const serviceResponse = await getFeedByUrl(rssLink, true);

    expect(typeof serviceResponse).toEqual('object');
  });
});
