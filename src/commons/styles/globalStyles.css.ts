import { createGlobalTheme, createTheme, createThemeContract, globalStyle } from '@vanilla-extract/css';

export const global = createGlobalTheme(':root', {
  color: {
    primary: '#ffff',
  },
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  textDecoration: 'none',
  color: '#fff',
});

const themeColor = createThemeContract({
  color: {
    primary: null,
    secondary: null,
    mainBackground: null,
    contentBackground: null,
    mainFontColor: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    primary: '#000000',
    secondary: '#E9E9E9',
    mainBackground: '#ffffff',
    contentBackground: '#ffffff',
    mainFontColor: '#000000',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    primary: '#ffffff',
    secondary: '#6A6868',
    mainBackground: '#000000',
    contentBackground: '#2c2c2c',
    mainFontColor: '#ffffff',
  },
});

export const vars = { ...global, themeColor };

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: `${vars.themeColor.color.mainBackground}`,
  color: `${vars.themeColor.color.mainFontColor}`,
  height: '100%',
});
