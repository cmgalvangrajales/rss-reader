import { FormattedMessage } from 'react-intl';

import message from './Detail.message';

function Detail() {
  return <FormattedMessage {...message.helloWorld} />;
}

export default Detail;
