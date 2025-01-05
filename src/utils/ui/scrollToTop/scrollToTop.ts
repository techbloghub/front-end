import { ScrollToTopProps } from './scrollToTop.types';

export const scrollToTop = ({ top = 0, behavior = 'smooth' }: ScrollToTopProps) => {
  window.scrollTo({
    top,
    behavior,
  });
};
