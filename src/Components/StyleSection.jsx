import React, { useState } from "react";
import colbg from "../Assests/images/leaf.png";
import vidSnip from "../Assests/images/vid-snip.png";
import vidPlayer from "../Assests/images/videoPlayer.png";
import { makeStyles } from "tss-react/mui";
import collectionService from "../Assests/images/styleBg.png";
import faceLogo from "../Assests/images/faceLogo.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import StyledButton2 from "./Common/StyledButton2";
import video from "../Assests/images/Pexels Videos 2023708.mp4";
import ModalCommon from "./Common/Modal";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "900px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    StyleContainer: {
      width: "92%",
      backgroundImage: `url(${collectionService})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "top right",
      overFlow: "hidden",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("tab")]: {
        width: "100%",
      },
    },
    faceLogo: {
      position: "absolute",
      left: "9%",
      top: "-15%",
      animation: "swing ease-in-out 1s infinite alternate",
      transformOrigin: "center -20px",
      float: "left",
      "img": {
        display: "block",
      },
      "@keyframes swing": {
        "0%": {
          transform: "rotate(3deg);",
        },
        "100%": {
          transform: "rotate(-3deg);",
        }
      },
      [theme.breakpoints.down("mobile")]: {
        left: "-10%",
      top: "-7%",
      },
    },
    Style: {
      paddingTop: "151px",
      // backgroundImage: `url(${colbg})`,
      // backgroundRepeat: "no-repeat",
      // backgroundPosition: "top right",
      display: "flex",
      alignItems: "center",
    },
    gridMain: {
      padding: "25px",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("laptop")]: {
        padding: "2px 20px",
      },
      [theme.breakpoints.down("tab")]: {
        padding: "0px 0px",
      },
    },
    reviewText: {
      fontFamily: "playfair display",
      color: "#55555A",
      fontSize: "23px",
      fontWeight: "500",
      lineHeight: "31px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "21px",
        lineHeight: "24px",
      },
    },
    boxText: {
      margin: "27px 0px 44px 114px",
      [theme.breakpoints.down("laptop")]: {
        margin: "20px 0px 29px 300px",
      },

      [theme.breakpoints.down("mobile")]: {
        textAlign: "center",
        margin: " 2rem 0rem 3rem 0rem",
      },
    },
    prText: {
      fontFamily: "playfair display",
      fontSize: "23px",
      fontWeight: "500",
      lineHeight: "31px",
      color: "#BB8F84",
    },
    reviewText2: {
      marginTop: "19px",
      marginBottom: "15px",
      fontFamily: "League Spartan",
      color: "#35364F",
      fontSize: "83px",
      fontWeight: "400",
      lineHeight: "76px",
      [theme.breakpoints.down("desktop")]: {
        fontSize: "55px",
        lineHeight: "54px",
      },
      [theme.breakpoints.down("laptop")]: {
        fontSize: "50px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "32px",
        lineHeight: "30px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
    },
    reviewText3: {
      fontFamily: "Nunito",
      color: "#676767",
      fontSize: "21px",
      fontWeight: "400",
      lineHeight: "30px",
      marginBottom: "15px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "17px",
        lineHeight: "20px",
      },
    },
    mainImage: {
      // backgroundImage: `url(${vidSnip})`,
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      // backgroundPosition: "top center",
      position: "absolute",
      top: "125px",
      width: "415px",
      background: "black",
      height: "35.0625rem",
      maxWidth: "100%",
      maxHeight: "100%",
      cursor: "pointer",
      zIndex: "1",
      [theme.breakpoints.down("laptop")]: {
        // width: "18rem",
        height: "25rem",
        top: "134px",
      },
      [theme.breakpoints.down("tab")]: {
        // width: "17rem",
        height: "24rem",
      },
      [theme.breakpoints.down("mobile")]: {
        position: "unset",
      },
    },
    discoverBtn: {
      width: "225px",
      marginTop: 30,
      [theme.breakpoints.down("laptop")]: {
        marginTop: 10,
      },
      [theme.breakpoints.down("mobile")]: {
        width: "auto",
        marginTop: 10,
      },
    },
    videoIcon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: " translate(-50%, -50%)",
      [theme.breakpoints.down("mobile")]: {
        top: "40%",
      },
    },
    leaf: {
      position: "absolute",
      top: "-20px",
      right: "0px",
      width: "252px",
      height: "335px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: -1,
      animation: "blow 10s infinite ease-in-out",
      "@keyframes blow": {
        "0%": {
          transform: "rotate(0deg)",
          transformOrigin: "bottom left",
        },
        "25%": {
          transform: "rotate(-3deg)",
          transformOrigin: "bottom left",
        },
        "50%": {
          transform: "rotate(-6deg)",
          transformOrigin: "bottom left",
        },
        "75%": {
          transform: "rotate(-3deg)",
          transformOrigin: "bottom left",
        },
        "100%": {
          transform: "rotate(0deg)",
          transformOrigin: "bottom left",
        }
      }
    },
  };
});

const StyleSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { classes } = useStyles();
  return (
    <Box className={classes.Style} position="relative">
      <Box className={classes.leaf}>
        <Box component="img" src={colbg} alt="" />
      </Box>
      <Box className={classes.StyleContainer}>
        <Box
          component="img"
          className={classes.faceLogo}
          src={faceLogo}
          alt=""
        />
        <Container className={classes.cont}>
          <Grid container className={classes.gridMain}>
            <Grid item mobile={12} laptop={4}>
            <video
                className={classes?.mainImage}
                width="100%"
                height="100%"
                controls
              >
                <source src={video} type="video/mp4" />
              </video>
              {/* <Box component="div" className={classes.WishListC}>
                <Box className={classes?.mainImage} component="div">
                  <Box
                    onClick={handleOpen}
                    className={classes?.videoIcon}
                    component="img"
                    src={vidPlayer}
                    alt=""
                  />
                </Box>
              </Box> */}
            </Grid>
            <Grid item mobile={12} laptop={8}>
              <Box className={classes.boxText}>
                <Typography component="p" className={classes.reviewText}>
                  Now up to{" "}
                  <Typography component="span" className={classes.prText}>
                    70%{" "}
                  </Typography>
                  off*
                </Typography>
                <Typography component="p" className={classes.reviewText2}>
                  Stand
                  <br /> Out In Style
                </Typography>
                <Typography component="p" className={classes.reviewText3}>
                  Through original imagery and editorial perspectives, we bring
                  you unique point newviews, the untold stories the most
                  creative people
                </Typography>
                <Box className={classes.discoverBtn}>
                  <StyledButton2 text="Discover Now" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ModalCommon
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Box>
  );
};

export default StyleSection;
