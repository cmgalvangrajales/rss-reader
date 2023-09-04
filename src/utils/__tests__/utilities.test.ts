import { FeedByURLResponseInterface } from '@services/Feeds';

import { fixFeedsObjectKeys, getCurrentPathSnippets, includesHTML } from '../utilities';

const feedMock: FeedByURLResponseInterface[] = [
  {
    origin: 'xatakandroid',
    items: [
      {
        title: 'Uno de los mejores lectores',
        pubDate: '2021-02-08 11:07:22',
        author: 'Iván Linares',
        thumbnail: '',
        description: 'description',
        content: '<div>test</div>',
        origin: '',
      },
    ],
  },
];

describe('Global Utilities', () => {
  test('getCurrentPathSnippets returns fragmented path', () => {
    const mockPath = 'test/second';
    const mockLocation = {
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: '98bqy9hv',
    };
    const result = getCurrentPathSnippets(mockLocation, mockPath);

    expect(result.join('/')).toEqual(mockPath);
  });

  test('includesHTML returns boolean validating for html content', () => {
    const result = includesHTML('<div>test</div>');

    expect(result).toBeTruthy();
  });

  test('includesHTML returns false on empty string', () => {
    const result = includesHTML('');

    expect(result).toBeFalsy();
  });

  test('fixFeedsObjectKeys returns an array of feeds', () => {
    const result = fixFeedsObjectKeys(feedMock);

    expect(result[0].origin).toEqual(feedMock[0].origin);
  });
});
