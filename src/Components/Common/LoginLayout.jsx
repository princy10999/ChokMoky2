import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import loginArrow from "../../Assests/images/loginaerrow.png";
import loginImage from "../../Assests/images/login-image.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: "flex",
      justifyContent: "center",
      margin: "140px auto 104px auto",
      width: "1041px",
      [theme.breakpoints.down("laptop")]: {
        width: "80%",
      },
      [theme.breakpoints.down("mobile")]: {
        margin: "70px auto 104px auto",
      },
      [theme.breakpoints.down("iph")]: {
        width: "90%",
      },
    },
    cont: {
      boxShadow:
        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    },
    loginImage: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      width: "450px",
      height: "100%",
      position: "relative",
    },
    mainForm: {
      position: "relative",
      width: "580px",
      [theme.breakpoints.down("laptop")]: {
        width: "570px",
      },
      [theme.breakpoints.down("tab")]: {
        width: "560px",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "460px",
        padding: "40px",
      },
      [theme.breakpoints.down("iph")]: {
        width: "100%",
      },
    },
    loginHead: {
      fontFamily: "League Spartan",
      fontWeight: "500",
      fontSize: "39px",
      lineHeight: "36px",
      color: "#35364F",
      [theme.breakpoints.down("iph")]: {
        fontSize: "30px",
      },
    },
    loginP: {
      fontFamily: "Nunito",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "24px",
      color: "#70717C",
      [theme.breakpoints.down("iph")]: {
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    createT: {
      fontFamily: "League Spartan",
      textAlign: "center",
      color: "#35364F",
      fontSize: "22px",
      fontWeight: "500",
      "&:hover": {
        color: "#BD3D3D",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "1rem",
        marginTop: "20px",
      },
    },
    loginError: {
      border: "1px solid #BD3D3D",
      padding: "10px",
      marginBottom: "20px",
    },
  };
});
export const LoginLayout = (props) => {
  const { classes } = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Box component="div" disableGutters className={classes.mainBox}>
      <Box component="div" disableGutters sx={{ display: "flex" }}>
        <Container disableGutters className={classes.cont}>
          <Grid container>
            <Grid
              item
              xs={6}
              sx={(theme) => ({
                [theme.breakpoints.down("laptop")]: {
                  display: "none",
                },
              })}
            >
              <Box component="div" className={classes.loginImage}>
                <Box
                  className={classes.loginImageimg}
                  component="img"
                  src={loginImage}
                  alt=""
                  sx={(theme) => ({
                    mt: props?.margin,
                    width: "100%",
                    height: props?.hight,
                    position: "absolute",
                    top: "0",
                    left: "0",
                  })}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                component="div"
                className={classes.mainForm}
                sx={{ padding: props?.padding }}
              >
                {props.emailError && (
                  <Typography
                    component="div"
                    variant="h6"
                    className={classes.loginError}
                  >
                    {props.emailError}
                  </Typography>
                )}
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Box
                    component="img"
                    src={loginArrow}
                    alt=""
                    sx={(theme) => ({
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      position: "absolute",
                      left: "0px",
                      [theme.breakpoints.down("mobile")]: {
                        width: "25px",
                        top: "50px",
                      },
                      [theme.breakpoints.down("iph")]: {
                        top: "45px",
                      },
                    })}
                  />
                  <Typography
                    component="div"
                    variant="h5"
                    className={classes.loginHead}
                  >
                    {props.title}
                  </Typography>
                </Stack>
                <Stack className={classes.formStack}>
                  <Typography
                    variant="p"
                    color="text.secondary"
                    component="p"
                    className={classes.loginP}
                  >
                    {props.text}
                  </Typography>
                  {props.children}
                  <Box
                    component={Link}
                    to={props?.link}
                    className={classes.createT}
                    sx={{ mt: props?.mt }}
                    data-aos="fade-up"
                  >
                    {props.option}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};