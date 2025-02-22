import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100dvw',
  height: '80px',
  maxWidth: '1200px',
});

export const title = style({
  fontSize: '35px',

  color: `${vars.themeColor.color.mainFontColor}`,
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
