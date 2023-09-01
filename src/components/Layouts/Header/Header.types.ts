import { AppThemeInterface } from '@contexts/ThemeContext';

export enum Justify {
  end = 'flex-end',
  start = 'flex-start',
  center = 'center',
  spaceBetween = 'space-between',
}

export interface ContainerInterface {
  $justify?: Justify;
  $centerItems?: boolean;
  theme?: AppThemeInterface;
}
