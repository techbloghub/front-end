import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',

  width: '27rem',
  height: '3rem',
  padding: '10px 20px',
  borderRadius: '50px',

  cursor: 'pointer',
});
