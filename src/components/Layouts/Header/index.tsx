import HeaderStyles from './Header.styles';
import { Justify } from './Header.types';

const HeaderLayout = () => {
  return (
    <HeaderStyles.Header>
      <HeaderStyles.Container $justify={Justify.end}>filters</HeaderStyles.Container>
    </HeaderStyles.Header>
  );
};

export default HeaderLayout;
