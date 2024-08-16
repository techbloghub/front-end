import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#ffff',
  },
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  backgroundColor: '#000',
  color: 'white',
  height: '100%',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  textDecoration: 'none',
  color: '#fff',
});
