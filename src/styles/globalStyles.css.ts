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
    mainBackground: null,
    contentBackground: null,
    mainFontColor: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#000000',
    contentBackground: '#ffffff',
    mainFontColor: '#ffffff',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#ffffff',
    contentBackground: '#2c2c2c',
    mainFontColor: '#000000',
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
