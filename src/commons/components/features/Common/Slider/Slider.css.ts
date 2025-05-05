import { vars } from '@/commons/styles/globalStyles.css';
import { keyframes, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  flex: 1,
  height: '100%',

  zIndex: 1000,
});

export const Bar = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  cursor: 'pointer',

  width: '3px',
  height: '100%',

  backgroundColor: `${vars.themeColor.color.secondary}`,

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-15px',
    right: '-15px',
    height: '100%',
    cursor: 'pointer',
  },
});

export const Circle = style({
  position: 'absolute',
  cursor: 'pointer',

  left: '50%',
  width: '20px',
  height: '20px',
  borderRadius: '50%',

  backgroundColor: `${vars.themeColor.color.primary}`,

  transform: 'translateX(-50%)',
});

const slideDown = keyframes({
  '0%': {
    top: '5px',
  },
  '100%': {
    top: 'calc(100% - 25px)',
  },
});

const slideUp = keyframes({
  '0%': {
    top: 'calc(100% - 20px)',
  },
  '100%': {
    top: '5px',
  },
});

export const circleDown = style({
  animation: `${slideDown} 0.3s ease-in-out forwards`,
});

export const circleUp = style({
  animation: `${slideUp} 0.3s ease-in-out forwards`,
});

export const tooltip = style({
  position: 'absolute',
  left: '30px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: vars.themeColor.color.contentBackground,
  color: vars.themeColor.color.mainFontColor,
  padding: '6px 10px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  zIndex: 1001,

  '::before': {
    content: '""',
    position: 'absolute',
    left: '-5px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '0',
    height: '0',
    borderTop: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderRight: `5px solid ${vars.themeColor.color.contentBackground}`,
  },
});
