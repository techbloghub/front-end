import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const collapsedSearchWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  marginRight: 'auto',
});

export const placeholder = style({
  color: vars.themeColor.color.placeholder,

  fontSize: '14px',
});
