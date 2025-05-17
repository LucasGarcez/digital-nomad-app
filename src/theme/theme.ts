import { createTheme } from "@shopify/restyle";

const palette = {
  fieryRed: "#FF4B4B",
  midnightBlack: "#1B1B1B",
  charcoalGrey: "#302E2D",
  stoneGrey: "#5C5C5C",
  pureWhite: "#FFFFFF",
};
const theme = createTheme({
  colors: {
    background: palette.midnightBlack,
    primary: palette.fieryRed,
    text: palette.pureWhite,
    gray1: palette.charcoalGrey,
    gray2: palette.stoneGrey,
  },
  spacing: {
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  textVariants: {
    defaults: {
      color: "text",
    },
  },
  borderRadii: {
    default: 16,
  },
});

export type Theme = typeof theme;
export default theme;
