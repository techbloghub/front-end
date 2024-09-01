import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',

  marginTop: '60px',
  maxWidth: '1200px',
  gap: '66px',
});

export const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  width: '250px',
  height: '320px',
  borderRadius: '12px',

  backgroundColor: '#6A6868',
});

export const cardImageWrapper = style({
  width: '250px',
  height: '130px',
});

export const bottomWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  padding: '20px',
});

export const tagWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',

  gap: '10px',
});

export const tag = style({
  padding: '4px 8px',

  borderRadius: '50px',
  fontSize: '12px',

  backgroundColor: '#fff',
  color: '#000',
});

export const title = style({
  fontSize: '18px',
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const company = style({
  marginRight: '4px',
  fontSize: '14px',
});

export const date = style({
  fontSize: '12px',
});
