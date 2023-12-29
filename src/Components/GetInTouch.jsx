import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import React from "react";
import Heading from "./Common/Heading";
import getInTouchFront from "../Assests/images/getInTouchFront.png";
import colbg from "../Assests/images/getInTouchBack.png";
import StyledButton2 from "./Common/StyledButton2";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    main: {
      paddingTop: "50px",
      backgroundImage: `url(${colbg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      [theme.breakpoints.down("mobile")]: {
        paddingTop: "0px",
        backgroundPosition: "bottom",
      },
    },
    mainGrid: {
      flexWrap: "nowrap",
      [theme.breakpoints.down("laptop")]: {
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },
    textBox: {
      paddingLeft: "28px",
      [theme.breakpoints.down("laptop")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },

    peraText: {
      fontSize: "26px",
      color: "#656570",
      fontWeight: "400",
      lineHeight: "38px",
      fontFamily: "League Spartan",
      marginBottom: "2rem",
      marginTop: "1rem",
      maxWidth: "750px",
      [theme.breakpoints.down("desktop")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("laptop")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "23px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "18px",
        lineHeight: "24px",
        margin: "0.2rem 0",
      },
    },
    colImgimg: {
      animation: "zoom-in-zoom-out 2s ease infinite",
      "@keyframes zoom-in-zoom-out": {
        '0%': {
          transform: "scale(1)",
        },
        '50%': {
          transform: "scale(1.1)",
        },
        '100%': {
          transform: "scale(1)",
        },
      },
      [theme.breakpoints.down("laptop")]: {
        height: "300px",
        width: "300px",
      },
      [theme.breakpoints.down("tab")]: {
        height: "250px",
        width: "250px",
      },
    },
    buttonGet: {
      width: "250px",
      marginTop: "15px",
      [theme.breakpoints.down("laptop")]: {
        marginTop: "0px",
      },
    },
    headingBox:{
      marginLeft:"125px",
      [theme.breakpoints.down("laptop")]: {
        marginLeft: "0px",
      },
    }
  };
});

const GetInTouch = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.main}>
      <Container className={classes.cont}>
        <Grid container spacing={2} className={classes.mainGrid}>
          <Grid item sm={5}>
            <Box
              component="img"
              className={classes.colImgimg}
              src={getInTouchFront}
              alt=""
            />
          </Grid>
          <Grid item sm={7}>
            <Box className={classes.textBox}>
              <Box className={classes.headingBox}>
              <Heading
                title="Have A Doubt"
                bgText="H"
                type="side"
                fontFamily="League Spartan, serif"
                h="145px"
                tabh="105px"
                iphh="88px"
              />
              </Box>
              <Typography className={classes.peraText}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </Typography>
              <Box className={classes.buttonGet}>
                <StyledButton2 text="Get in touch" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default GetInTouch;
