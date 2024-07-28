import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'blue',
    secondary: 'pink',
  },
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: vars.color.secondary,
  color: 'white',
  height: '100%',
});

globalStyle('*', {
  boxSizing: 'border-box',
});
