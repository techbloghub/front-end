import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Bar = style({
  width: '3px',
  height: '10px',
  backgroundColor: 'blue',
});

export const Circle = style({
  width: '10px',
  height: '10px',
  backgroundColor: 'red',
  borderRadius: '50%',
});
