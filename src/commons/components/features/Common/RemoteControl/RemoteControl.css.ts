import { vars } from '@/commons/styles/globalStyles.css';
import { mediaQueries } from '@/commons/utils/ui/mediaQueries/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'fixed',
  bottom: '100px',
  right: '60px',

  ...mediaQueries({
    tablet: { right: '20px', bottom: '40px' },
    mobile: { right: '10px', bottom: '20px' },
  }),

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

  backgroundColor: `${vars.themeColor.color.secondary}`,
});
