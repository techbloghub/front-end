import { vars } from '@/commons/styles/globalStyles.css';
import { mediaQueries } from '@/commons/utils/ui/mediaQueries/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100dvw',
  height: '80px',
  maxWidth: '1740px',

  padding: '0 20px',

  ...mediaQueries({
    mobile: { padding: '0 10px' },
  }),
});

export const title = style({
  fontSize: '35px',

  color: `${vars.themeColor.color.mainFontColor}`,

  ...mediaQueries({
    mobile: { fontSize: '16px' },
    tablet: { fontSize: '24px' },
  }),
});

export const left = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const right = style({
  display: 'flex',
  flexDirection: 'row',

  cursor: 'pointer',
});
