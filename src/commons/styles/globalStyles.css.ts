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
    secondaryFontColor: null,
    searchBarBackground: null,
    cardBackground: null,
    tagIconBackground: null,
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    primary: '#000000',
    secondary: '#E9E9E9',
    mainBackground: '#ffffff',
    contentBackground: '#ffffff',
    mainFontColor: '#000000',
    secondaryFontColor: '#ffffff',
    searchBarBackground: '#E9E9E9',
    cardBackground: '#E9E9E9',
    tagIconBackground: '#ffffff',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    primary: '#ffffff',
    secondary: '#6A6868',
    mainBackground: '#000000',
    contentBackground: '#2c2c2c',
    mainFontColor: '#ffffff',
    secondaryFontColor: '#000000',
    searchBarBackground: '#ffffff',
    cardBackground: '#6A6868',
    tagIconBackground: '#343330',
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
