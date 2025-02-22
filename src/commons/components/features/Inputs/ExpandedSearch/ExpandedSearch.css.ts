import { vars } from '@/commons/styles/globalStyles.css';
import { style } from '@vanilla-extract/css';

export const OutExpandedWrapper = style({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',

  display: 'flex',
  justifyContent: 'center',

  width: '100vw',
  height: '100vh',

  padding: '80px 54px',

  zIndex: '1000',
  // backgroundColor: 'rgba(0, 0, 0, 0.65)',

  backdropFilter: 'blur(10px)',
});

export const expandedWrapper = style({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',

  display: 'flex',
  flexDirection: 'column',

  width: '37rem',
  height: 'fit-content',

  backgroundColor: `${vars.themeColor.color.searchBarBackground}`,

  borderRadius: '25px',
  padding: '20px',

  zIndex: '2000',
});

export const searchInput = style({
  width: '100%',
  height: '16px',

  marginBottom: '14px',

  backgroundColor: 'transparent',
  color: '#000000',

  fontSize: '14px',

  border: 'none',
  outline: 'none',
});
