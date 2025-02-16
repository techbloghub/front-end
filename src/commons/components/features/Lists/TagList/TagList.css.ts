import { style } from '@vanilla-extract/css';

export const tagListWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

  gap: '10px',

  fontSize: '12px',
});
