import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  marginTop: '60px',
  maxWidth: '1200px',
  gap: '30px',
});

export const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  width: '250px',
  height: '320px',
  borderRadius: '12px',

  backgroundColor: `${vars.themeColor.color.secondary}`,

  transition: 'transform 0.5s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    transform: 'translateY(-8px)',
  },
});

export const cardImageWrapper = style({
  width: '250px',
  height: '130px',
});

export const bottomWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  padding: '6px 12px 12px',
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
