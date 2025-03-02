import { vars } from '@/commons/styles/globalStyles.css';
import { mediaQueries } from '@/commons/utils/ui/mediaQueries/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  // flex: 1,

  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',

  marginTop: '60px',
  maxWidth: '1740px',

  gap: '35px',

  padding: '0 20px',
  ...mediaQueries({
    desktopXLarge: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    desktopLarge: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
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

  width: '100%',
  maxWidth: '23rem',
  height: '26rem',
  borderRadius: '12px',

  justifySelf: 'center',

  overflow: 'hidden',

  ...mediaQueries({
    tablet: {
      height: '22rem',
    },
    tabletSmall: {
      height: '22rem',
    },
    mobile: {
      height: '24rem',
    },
  }),

  backgroundColor: `${vars.themeColor.color.secondary}`,

  transition: 'transform 0.5s ease-in-out',
  cursor: 'pointer',
  ':hover': {
    transform: 'translateY(-8px)',
  },
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: '180px',
});

export const bottomWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  padding: '12px 12px 0',

  justifyContent: 'space-between',
});

export const title = style({
  fontSize: '18px',
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: 'auto',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const company = style({
  marginRight: '4px',
  fontSize: '16px',
});

export const date = style({
  fontSize: '12px',
});
