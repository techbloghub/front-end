import { vars } from '@/commons/styles/globalStyles.css';
import { mediaQueries } from '@/commons/utils/ui/mediaQueries/mediaQueries';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'row',
  backgroundColor: `${vars.themeColor.color.searchBarBackground}`,

  width: '27rem',
  height: '3rem',
  padding: '10px 20px',
  borderRadius: '50px',

  cursor: 'pointer',

  ...mediaQueries({
    tablet: { width: '20rem' },
    mobile: { width: '15rem' },
  }),
});
