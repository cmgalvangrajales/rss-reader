import axios from 'axios';

import { getFeedByUrl } from '../feeds.service';

jest.mock('axios');

const rssLink = 'https://www.xatakandroid.com/tag/feeds/rss2.xml';

describe('Services', () => {
  afterAll(async () => {
    // avoid jest open handle error
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
  });

  test('getFeedByUrl should return a JSON', async () => {
    const mockResponseData = {
      status: 'ok',
      feed: {
        url: 'https://www.xatakandroid.com/tag/feeds/rss2.xml',
        title: 'Magazine - feeds',
        link: 'https://www.xatakandroid.com/',
        author: '',
        description:
          'Publicación de noticias sobre gadgets y tecnología. Últimas tecnologías en electrónica de consumo y novedades tecnológicas en móviles, tablets, informática, etc',
        image: '',
      },
    };

    // Make the mock return the custom axios response
    axios.get = jest.fn().mockResolvedValue({ data: mockResponseData });

    const serviceResponse = await getFeedByUrl(rssLink, true);

    expect(axios.get).toHaveBeenCalled();
    expect(serviceResponse.status).toBe('ok');
    expect(serviceResponse).toEqual(mockResponseData);
  });
});
