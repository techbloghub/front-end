export const scrollToTop = (top: number = 0, behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top,
    behavior,
  });
};
