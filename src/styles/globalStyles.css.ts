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
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#000000',
    contentBackground: '#ffffff',
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: '#ffffff',
    contentBackground: '#2c2c2c',
  },
});

export const vars = { ...global, themeColor };

globalStyle('body', {
  margin: 0,
  padding: 0,
  backgroundColor: `hsl(${vars.themeColor.color.mainBackground})`,
  color: 'white',
  height: '100%',
});
