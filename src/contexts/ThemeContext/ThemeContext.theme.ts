import { AppThemeInterface } from './ThemeContext.types';

export const theme: AppThemeInterface = {
  breakPointSize: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '768px',
    tabletM: '769px',
    laptopS: '848px',
    laptopLG: '992px',
    laptopM: '1024px',
    laptopML: '1100px',
    laptopXL: '1200px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  mediaQueries: {
    mobileS: '(min-width: 320px)',
    mobileM: '(min-width: 375px)',
    mobileL: '(min-width: 425px)',
    tabletS: '(min-width: 768px)',
    tabletM: '(min-width: 769px)',
    laptopS: '(min-width: 848px)',
    laptopLG: '(min-width: 992px)',
    laptopM: '(min-width: 1024px)',
    laptopL: '(min-width: 1440px)',
    desktop: '(min-width: 2560px)',
  },
  palette: {
    blue50: '#1E65D2',
    gray20: '#878ECE',
  },
  typography: {
    Base215: {
      fontSize: '15px',
      fontFamily: 'Source Sans Pro Bold',
      lineHeight: '20px',
      letterSpacing: 'normal',
      fontWeight: '600',
    },
    Base115: {
      fontSize: '15px',
      fontFamily: 'Source Sans Pro',
      lineHeight: '20px',
      letterSpacing: 'normal',
      fontWeight: '400',
    },
    Base109: {
      fontSize: '9px',
      fontFamily: 'Source Sans Pro',
      lineHeight: '20px',
      letterSpacing: 'normal',
      fontWeight: '400',
    },
  },
  button: {
    BaseBlue50: {
      backgroundColor: '#1E65D2',
      borderColor: '#1E65D2',
      color: '#FFFFFF',
      fontSize: '14px',
      lineHeight: '24px',
      hoverBackgroundColor: '#1E65D2',
      hoverBorderColor: '#1E65D2',
    },
    BaseDisabled: {
      backgroundColor: '#F5F5F5',
      borderColor: '#D6D6D6',
      color: '#7E7E7E',
      fontSize: '14px',
      lineHeight: '24px',
      hoverBackgroundColor: '#F5F5F5',
      hoverBorderColor: '#D6D6D6',
    },
  },
};
