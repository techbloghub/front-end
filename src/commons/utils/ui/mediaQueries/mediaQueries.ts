import { StyleRule } from '@vanilla-extract/css';

type BreakpointKey = keyof typeof breakpoints;

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
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
