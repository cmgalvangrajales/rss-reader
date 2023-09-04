import { get } from '../../ServiceBase';
import { FeedByURLResponseInterface } from '../domain/freeds.types';

/**
 * This function uses api.rss2json to convert the xml into json
 */
export function getFeedByUrl(url: string, convertToJSON: boolean = false): Promise<FeedByURLResponseInterface> {
  return get({
    servicePath: convertToJSON ? `https://api.rss2json.com/v1/api.json?rss_url=${url}` : url,
  });
}
