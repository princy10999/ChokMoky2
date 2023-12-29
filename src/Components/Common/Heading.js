import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Typography } from "@mui/material";
import { AiOutlineGoogle } from "react-icons/ai";
import { theme } from "antd";

const useStyles = makeStyles()((theme) => {
  return {
    animationShrinkNew: {
      // fontFamily: "Sorts Mill Goudy, serif",
      width:"90%",
      margin:"auto",
      fontSize: "14px",
      fill: "#051f34",
      color: "#051f34",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "transparent",
      lineHeight: "1",
      fontWeight: "600",
      transitionDuration: ".3s",
      transitionProperty: "transform",
      textAlign: "center",
      textDecoration: "none",
      transition: "all .3s",
      "&:hover": {
        color: "#000000",
        backgroundColor: "transparent",
      },
      "&:focus": {
        color: "#000000",
        backgroundColor: "transparent",
      },
    },
    animatedTextLetters: {
      position: "relative",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fill: "#051f34",
      color: "#051f34",
      "&:hover": {
        ".animatedFirstLetter >.bigAnimatedLetter .outer": {
          transform: "none",
        },
        ".animatedFirstLetter> .bigAnimatedLetter .inner": {
          transform: "none",
        },
      },
    },
    animatedFirstLetter: {
      textTransform: "uppercase",
      fontSize: "149px",
      fontWeight: "400",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fill: " #051f34",
      color: " #051f34",
      [theme.breakpoints.down("tab")]: {
        fontSize: "130px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "7em",
      },
    },
    bigAnimatedLetter: {
      fontFamily: "Sorts Mill Goudy, serif",
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      fill: "#FCE5DF",
      color: "#FCE5DF",
      // animation: "filler 2s infinite alternate",
      // "@keyframes filler": {
      //   "0%": { height: "0%" },
      //   "100%": { height: "100%" },
      // },
    },
    bigAnimatedLetter2: {
      fontFamily: "Sorts Mill Goudy, serif",
      position: "relative",
      display: "inline-block",
      overflow: "hidden",
      fill: "#BD3D3D",
      color: "#BD3D3D",
      // animation: "filler 2s infinite alternate",
      // "@keyframes filler": {
      //   "0%": { height: "0%" },
      //   "100%": { height: "100%" },
      // },
    },
    outer: {
      fontFamily: "Sorts Mill Goudy, serif",
      // fontFamily: "Sorts Mill Goudy, serif",
      position: "absolute",
      overflow: "hidden",
      top: "0",
      left: "0",
      transition: "transform 2s ease",
      transform: "translateY(100%)",
    },
    inner: {
      fontFamily: "Sorts Mill Goudy, serif",
      // fontFamily: "Sorts Mill Goudy, serif",
      display: "inline-block",
      transition: "transform 2s ease",
      transform: " translateY(-100%)",
      fill: "#BD3D3D",
      color: "#BD3D3D",
    },
    elementorButtonContentWrapper: {
      fontSize: "60px",
      position: "absolute",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("tab")]: {
        fontSize: "40px",
      },
    },
    // elementorText: {
    //   fontFamily: "League Spartan, serif",
    // },
    headP: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "1.2rem",
      color: "#70717C",
      fontWeight: "400",
      lineHeight: "25px",
      [theme.breakpoints.down("iph")]: {
        marginTop: "0",
        fontSize: "16px",
        lineHeight: "18px"
      },
    },
    sideMainClass: {
      alignItems: "baseline",
    },
    leftLeft300: {
      left: "-10px",
    },
    leftLeft2: {
      left: "5px",
      [theme.breakpoints.down("laptop")]: {
        bottom: "15px !important",
        left: "auto",
      },
    },
    client: {
      [theme.breakpoints.down("laptop")]: {
        // bottom: "15px !important",
        left: "auto",
      },
    },
    animatedTextLettersTwo: {
      position: "relative",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fill: "#051F34",
      color: "#051F34",
      ".animatedFirstLetter >.bigAnimatedLetter .outer": {
        transform: "none",
      },
      ".animatedFirstLetter> .bigAnimatedLetter .inner": {
        transform: "none",
      },
    },
  };
});

const Heading = ({
  title,
  subTitle,
  bgText,
  type,
  fontFamily,
  size,
  tabsize,
  iphsize,
  h,
  tabh,
  iphh,
  lapbott,
  iphbott,
  smallbott,
  tabbott,
  mobileh,
  mobilebott,
  smallsize
}) => {
  const [abcd, setAbcd] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1300 && window.scrollY < 1320) {
        setAbcd(true);
        console.log("abcd 1300 ==>", abcd);
        setTimeout(() => {
          setAbcd(false);
        }, 2000);
      } else if (window.scrollY > 4400 && window.scrollY < 4420) {
        setAbcd(true);
        console.log("abcd 4400 ==>", abcd);
        setTimeout(() => {
          setAbcd(false);
        }, 2000);
      } else if (window.scrollY > 5200 && window.scrollY < 5220) {
        setAbcd(true);
        console.log("abcd 5200 ==>", abcd);
        setTimeout(() => {
          setAbcd(false);
        }, 2000);
      } else if (window.scrollY > 5700 && window.scrollY < 5720) {
        setAbcd(true);
        console.log("abcd 5700 ==>", abcd);
        setTimeout(() => {
          setAbcd(false);
        }, 2000);
      }
    });
  }, []);
  const { classes } = useStyles();
  return (
    <div>
      <a
        className={`${classes.animationShrinkNew} ${type === "side" && classes.sideMainClass
          }`}
      >
        <div
          className={`${abcd ? classes.animatedTextLettersTwo : classes.animatedTextLetters} ${type === "side" && classes.leftLeft300}`}
        >
          <Box
            component="span"
            sx={(theme) => ({
              height: h,
              [theme.breakpoints.down("tab")]: {
                height: tabh,
              },
              [theme.breakpoints.down("mobile")]: {
                height: mobileh,
              },
              [theme.breakpoints.down("iph")]: {
                height: iphh,
              },
            })}
            className={`${classes.animatedFirstLetter} animatedFirstLetter`}
          >
            <span className={`${classes.bigAnimatedLetter} bigAnimatedLetter`}>
              <span className={`${classes.outer} outer`}>
                <span className={`${classes.inner} inner`}>{bgText}</span>
              </span>
              {bgText}
            </span>
          </Box>
          <Box component="span"
            sx={(theme) => ({
              [theme.breakpoints.down("laptop")]: {
                bottom: lapbott,
              },
              [theme.breakpoints.down("tab")]: {
                bottom: tabbott ? tabbott : "56px",
              },
              [theme.breakpoints.down("mobile")]: {
                bottom: mobilebott,
              },
              [theme.breakpoints.down("iph")]: {
                bottom: iphbott,
              },
              [theme.breakpoints.down("small")]: {
                bottom: smallbott,
              },
            })}
            className={`${classes.elementorButtonContentWrapper} ${type === "side" && classes.leftLeft
              } ${type === "client" && classes.client}`}
          >
            <Box
              component="span"
              sx={(theme) => ({
                fontFamily: fontFamily,
                fontSize: size,
                [theme.breakpoints.down("tab")]: {
                  fontSize: tabsize,
                },
                [theme.breakpoints.down("iph")]: {
                  fontSize: iphsize,
                },
                [theme.breakpoints.down("small")]: {
                  fontSize: smallsize,
                },
              })}
            >
              {title}
            </Box>
          </Box>
          <Box component="div" className={classes.headP}>
            {subTitle}
          </Box>
        </div>
      </a>
    </div>
  );
};
export default Heading;
