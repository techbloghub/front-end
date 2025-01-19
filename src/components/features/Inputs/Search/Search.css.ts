import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',

  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#fff',

  width: '27rem',
  height: '3rem',
  padding: '10px 20px',
  borderRadius: '50px',

  cursor: 'pointer',
});

export const glassesWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

export const tagWrapper = style({
  display: 'flex',
  flexDirection: 'row',

  marginRight: 'auto',
});

export const tagBox = style({
  padding: '6px',
  borderRadius: '50px',
  backgroundColor: '#6A6868',

  fontSize: '12px',

  marginRight: '10px',
});

export const OutExpandedWrapper = style({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',

  display: 'flex',
  justifyContent: 'center',

  width: '100vw', // 100%에서 100vw로 변경
  height: '100vh', // 100%에서 100vh로 변경

  padding: '80px 54px',

  zIndex: '1000',
  backgroundColor: 'rgba(0, 0, 0, 0.65)', // 반투명 검은색으로 변경
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
  height: '22rem',

  backgroundColor: '#fff',

  borderRadius: '25px',
  padding: '20px',

  zIndex: '2000',
});

export const searchInput = style({
  width: '100%',
  height: '16px',

  marginBottom: '14px',

  backgroundColor: 'transparent',
  color: '#000',

  fontSize: '14px',

  border: 'none',
  outline: 'none',
});

export const expandedTagWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',

  fontSize: '12px',
});

export const relatedTagWrapper = style({
  display: 'flex',
  flexDirection: 'column',

  margin: '0',
  padding: '0',
});

export const relatedTagBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  width: '100%',

  gap: '10px',
});

export const relatedTagText = style({
  fontSize: '12px',

  color: '#000',
});
