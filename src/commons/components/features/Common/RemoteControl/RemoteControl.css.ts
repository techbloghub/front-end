import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'fixed',
  bottom: '100px',
  right: '60px',

  display: 'flex',
  flexDirection: 'column',

  gap: '16px',
});

export const iconWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  width: '40px',
  height: '40px',

  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',

  backgroundColor: '#6A6868',
});
