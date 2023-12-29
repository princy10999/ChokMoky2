import { createTheme } from "@mui/material/styles";

const red = "#BD3D3D";
const white = "#FFFFFF";
const transparent="ffffff00";
export default createTheme({
  breakpoints: {
    values: {
      xSmall: 320,
      small: 360,
      iph: 480,
      mobile: 575,
      xTab:600,
      stab:650,
      tab: 767,
      laptop: 991,
      smallLaptop: 1081,
      xDesktop:1278,
      mLaptop:1235,
      desktop: 1199,
    },
  },
  palette: {
    common: {
      red: `${red}`,
      white: `${white}`,
      transparent:`${transparent}`,
    },
    primary: {
      main: `${red}`,
    },
    secondary: {
      main: `${white}`,
    },
  },
});
