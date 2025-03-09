import { style } from '@vanilla-extract/css';

export const collapsedSearchWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginRight: 'auto',
});

export const placeholder = style({
  color: '#999',

  fontSize: '14px',
});
