import { ReactNode } from 'react';

export interface ThemeProviderInterface {
  children: ReactNode;
}

export interface AppThemeInterface {
  breakPointSize: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tabletS: string;
    tabletM: string;
    laptopS: string;
    laptopLG: string;
    laptopM: string;
    laptopML: string;
    laptopXL: string;
    laptopL: string;
    desktop: string;
  };
  mediaQueries: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tabletS: string;
    tabletM: string;
    laptopS: string;
    laptopLG: string;
    laptopM: string;
    laptopL: string;
    desktop: string;
  };
  palette: {
    [key: string]: string;
  };
  typography: {
    [key: string]: {
      fontSize: string;
      fontFamily: string;
      lineHeight: string;
      letterSpacing: string;
      fontWeight?: string;
    };
  };
  button: {
    [key: string]: {
      backgroundColor: string;
      borderColor?: string;
      color: string;
      fontSize: string;
      lineHeight: string;
      hoverBackgroundColor: string;
      hoverBorderColor?: string;
      boxShadow?: string;
      focusBackgroundColor?: string;
      focusBorderColor?: string;
    };
  };
}
