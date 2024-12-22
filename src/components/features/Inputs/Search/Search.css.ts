import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',

  width: '30dvw',
  padding: '10px 20px',
  borderRadius: '50px',

  cursor: 'pointer',
});

export const textInput = style({
  outlineColor: '#fff',
  fontSize: '16px',
});

export const glassesWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const tagWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  marginRight: 'auto',
});

export const tagBox = style({
  padding: '6px',
  borderRadius: '50px',
  backgroundColor: '#6A6868',
  marginRight: '10px',
});
