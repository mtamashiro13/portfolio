import { createTheme } from "@mui/material/styles";
import { designTokens } from "./designTokens";

/**
 * MUI theme built from design tokens.
 * Edit app/theme/designTokens.ts to customize component styles.
 */
export const theme = createTheme({
  palette: designTokens.palette,
  typography: {
    fontFamily: designTokens.typography.fontFamily,
    fontSize: designTokens.typography.fontSize,
    fontWeightLight: designTokens.typography.fontWeightLight,
    fontWeightRegular: designTokens.typography.fontWeightRegular,
    fontWeightMedium: designTokens.typography.fontWeightMedium,
    fontWeightBold: designTokens.typography.fontWeightBold,
    h1: designTokens.typography.h1,
    h2: designTokens.typography.h2,
    h3: designTokens.typography.h3,
    h4: designTokens.typography.h4,
    h5: designTokens.typography.h5,
    h6: designTokens.typography.h6,
    subtitle1: designTokens.typography.subtitle1,
    subtitle2: designTokens.typography.subtitle2,
    body1: designTokens.typography.body1,
    body2: designTokens.typography.body2,
    button: designTokens.typography.button,
    caption: designTokens.typography.caption,
    overline: designTokens.typography.overline,
  },
  shape: designTokens.shape,
  spacing: designTokens.spacing,
  breakpoints: designTokens.breakpoints,
  shadows: [...designTokens.shadows],
  transitions: {
    duration: designTokens.transitions.duration,
    easing: designTokens.transitions.easing,
  },
});
