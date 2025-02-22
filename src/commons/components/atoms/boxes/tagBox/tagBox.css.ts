import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const tagBox = style({
  padding: '8px 10px',
  borderRadius: '50px',
  backgroundColor: `${vars.themeColor.color.mainBackground}`,
  fontSize: '12px',
});
