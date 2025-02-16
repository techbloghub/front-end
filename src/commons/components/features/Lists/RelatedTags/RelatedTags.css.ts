import { style } from '@vanilla-extract/css';

export const relatedTagWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  margin: '0',
  padding: '0',
});

export const relatedTagBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  width: '100%',

  gap: '10px',

  cursor: 'pointer',

  ':focus': {
    outline: 'none',
    backgroundColor: 'rgba(106, 104, 104, 0.1)',
  },

  ':hover': {
    backgroundColor: 'rgba(106, 104, 104, 0.1)',
  },
});

export const relatedTagText = style({
  fontSize: '12px',

  color: '#000',
});

export const focusedTag = style({
  backgroundColor: 'rgba(106, 104, 104, 0.1)',
});
