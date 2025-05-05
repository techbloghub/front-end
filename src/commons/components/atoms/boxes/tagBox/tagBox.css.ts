import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const tagBox = style({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 10px',
  borderRadius: '50px',
  backgroundColor: `${vars.themeColor.color.mainBackground}`,
  fontSize: '12px',
  gap: '5px',
  maxWidth: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  zIndex: 3,
});

export const removeButton = style({
  background: 'none',
  border: 'none',
  color: vars.themeColor.color.mainFontColor,
  cursor: 'pointer',
  fontSize: '12px',
  padding: '0 2px',
  marginLeft: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.7,
  transition: 'opacity 0.2s',
  ':hover': {
    opacity: 1,
  },
  zIndex: 4,
});
