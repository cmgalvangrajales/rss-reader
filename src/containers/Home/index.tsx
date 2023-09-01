import { FormattedMessage } from 'react-intl';

import message from './Home.message';

function Home() {
  return <FormattedMessage {...message.helloWorld} />;
}

export default Home;
