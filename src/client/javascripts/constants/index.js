export const RouterPaths = {
  FORBIDDEN: '/forbidden',
  ROOT: '/dashboard',
  PROFILE: '/profile',
  VIEW_FLAGS: '/view_flags',
  UNAUTHORIZED: '/unauthorized',
  LOGGEDOUT: '/logged_out',
  ADMIN: '/admin',
};

export const LogTypes = {
  SAGA: 'saga',
  COMPONENT: 'component',
};

export const ButtonTypes = {
  PRIMARY: 'primary',
  REVERSE: 'reverse',
  OUTLINE: 'outline',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  all: /* istanbul ignore next */ () => ['primary', 'reverse', 'outline', 'secondary', 'tertiary'],
};

export const DefaultSessionTimeout = {
  EXPIRY_IN_MINUTES: 15,
  WARNING_IN_MINUTES: 2,
};

export const Breakpoint = {
  sm: 375,
  md: 576,
  lg: 768,
  xl: 1024,
  xxl: 1200,
};

export const BreakpointMax = {
  xs: Breakpoint.sm - 0.02,
  sm: Breakpoint.md - 0.02,
  md: Breakpoint.lg - 0.02,
  lg: Breakpoint.xl - 0.02,
  xl: Breakpoint.xxl - 0.02,
};

export const mq = {
  sm: `@media (min-width: ${Breakpoint.sm}px)`,
  md: `@media (min-width: ${Breakpoint.md}px)`,
  lg: `@media (min-width: ${Breakpoint.lg}px)`,
  xl: `@media (min-width: ${Breakpoint.xl}px)`, // Header transitions to desktop version at this breakpoint
  xxl: `@media (min-width: ${Breakpoint.xxl}px)`,
};

export const mqd = {
  xs: `@media (max-width: ${BreakpointMax.xs}px)`,
  sm: `@media (max-width: ${BreakpointMax.sm}px)`,
  md: `@media (max-width: ${BreakpointMax.md}px)`,
  lg: `@media (max-width: ${BreakpointMax.lg}px)`, // Header transitions to desktop version at this breakpoint
  xl: `@media (max-width: ${BreakpointMax.xl}px)`,
};
