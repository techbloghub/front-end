import { vars } from '@/styles/globalStyles.css';
import { keyframes, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  flex: 1,
  height: '100%',
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
