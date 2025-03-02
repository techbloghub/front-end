import { vars } from '@/commons/styles/globalStyles.css';
import { mediaQueries } from '@/commons/utils/ui/mediaQueries/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15.6rem, 1fr))',
  gap: '30px',
  marginTop: '60px',
  maxWidth: '1200px',
  backgroundColor: 'red',

  ...mediaQueries({
    tabletLarge: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    tablet: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    tabletSmall: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    mobile: {
      gridTemplateColumns: '1fr',
    },
  }),
});

export const cardWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  width: '15.6rem',
  height: '19.9rem',
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
