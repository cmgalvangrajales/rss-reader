import { FormattedMessage } from 'react-intl';

import message from './Header.message';
import HeaderStyles from './Header.styles';
import { Justify } from './Header.types';

const HeaderLayout = () => {
  return (
    <HeaderStyles.Header>
      <HeaderStyles.Container $justify={Justify.end}>
        <b>
          <FormattedMessage {...message.mark} />
        </b>
      </HeaderStyles.Container>
    </HeaderStyles.Header>
  );
};

export default HeaderLayout;
