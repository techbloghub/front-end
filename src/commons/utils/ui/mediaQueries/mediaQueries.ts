import { StyleRule } from '@vanilla-extract/css';

type BreakpointKey = keyof typeof breakpoints;

export const breakpoints = {
  mobileSmall: 480,
  mobile: 768,
  mobileLarge: 896,
  tabletSmall: 980,
  tablet: 1024,
  tabletLarge: 1148,
  desktop: 1280,
  desktopLarge: 1440,
  desktopXLarge: 1740,
  desktopXXLarge: 1920,
};

export const mediaQuery = (breakpoint: BreakpointKey, rules: StyleRule) => ({
  [`@media (max-width: ${breakpoints[breakpoint]}px)`]: rules,
});

export const mediaQueries = (queries: Partial<Record<BreakpointKey, StyleRule>>) =>
  Object.entries(queries).reduce(
    (acc, [key, value]) => ({
      ...acc,
      ...mediaQuery(key as BreakpointKey, value),
    }),
    {},
  );
