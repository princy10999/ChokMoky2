import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Typography, Stack, Button } from "@mui/material";
import googleIcon from "../../Assests/images/google.svg";
import facebookIcon from "../../Assests/images/facebook.svg";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { isLoader } from "../../Redux/Actions/loaderSlice";
import { useDispatch } from "react-redux";
import { socialLogin } from "../../Redux/Actions/AuthUser";
import { LoginSocialFacebook } from "reactjs-social-login";

const useStyles = makeStyles()((theme) => {
  return {
    textOr: {
      marginTop: "28px",
      fontFamily: "League Spartan",
      fontWeight: "400",
      fontSize: "17px",
      color: "#9D9B9B",
      position: "relative",
      textAlign: "center",
      "&::before": {
        content: '" "',
        height: "2px",
        width: "35%",
        background: "#EFEFEF",
        position: "absolute",
        left: 50,
        top: 6,
        [theme.breakpoints.down("iph")]: {
          width: "29%",
          left: "38px",
        },
        [theme.breakpoints.down("small")]: {
          left: "32px",
        },
      },
      "&::after": {
        content: '" "',
        height: "2px",
        width: "35%",
        background: "#EFEFEF",
        position: "absolute",
        right: 50,
        top: 6,
        [theme.breakpoints.down("iph")]: {
          width: "29%",
          right: "38px",
        },
        [theme.breakpoints.down("small")]: {
          right: "32px",
        },
      },
    },

    googleButton: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "14px 10px 14px 21px",
      backgroundColor: "transparent",
      border: "1px solid #CACACA",
      borderRadius: "0px",
      color: "#3D3D47",
      alignItems: "center",
      textTransform: "none",
      "&:hover": {
        border: "1px solid #CACACA",
        backgroundColor: "#141524",
        color: "#fff",
      },
    },
    facebookButton: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "16px 10px 16px 10px",
      border: "none",
      backgroundColor: "#3A5793",
      borderRadius: "0px",
      color: "white",
      alignItems: "center",
      textTransform: "none",
      "&:hover": {
        border: "none",
        backgroundColor: "#141524",
        color: "white",
      },
    },
    buttonLineG: {
      textAlign: "center",
      borderLeft: "1px solid ",
      height: "21px",
      paddingRight: "2px",
      color: "#DDDDDD",
      marginRight: "10px",
      marginLeft: "12px",
    },
    buttonLineF: {
      textAlign: "center",
      borderLeft: "1px solid ",
      height: "21px",
      paddingRight: "2px",
      color: "white",
      marginRight: "10px",
      marginLeft: "8px",
      [theme.breakpoints.down("iph")]: {
        height: "19px",
      },
    },
    socialText: {
      lineHeight: "0",
      fontFamily: "League Spartan",
      textAlign: "center",
      fontSize: "21px",
      fontWeight: "500",
      textDecoration: "none",
      [theme.breakpoints.down("iph")]: {
        fontSize: "1rem",
      },
    },
    socialButton: {
      marginBottom: "50px",
      "& span ": {
        width: "100%",
      },
      "& span button": {
        width: "100%",
        padding: "16px 10px"

      },
      [theme.breakpoints.down("mobile")]: {
        marginBottom: "0",
      },
    },
  };
});

function BottomLoginButton({ responseGoogle, responseFacebook }) {
  const { classes } = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "1046781202779-eq6c8da55bv8pt4msi63mau2tfp0gm1c.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);


  return (
    <>
      <Typography component="div" variant="p" className={classes.textOr}>
        OR
      </Typography>
      <Stack
        className={classes.socialButton}
        direction={{ iph: "row", xSmall: "column" }}
        alignItems="center"
        spacing={3.375}
        sx={{ mt: "25px" }}
        data-aos="fade-up"
      >
        <GoogleLogin
          clientId="1046781202779-eq6c8da55bv8pt4msi63mau2tfp0gm1c.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              className={classes.googleButton}
              variant="outlined"
              fullWidth
              type="submit"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <Box
                component="img"
                src={googleIcon}
                alt="google"
                sx={(theme) => ({
                  width: "26px",
                  height: "auto",

                  [theme.breakpoints.down("iph")]: {
                    width: "20px",
                  },
                })}
              />

              <Typography className={classes.buttonLineG}></Typography>
              <Typography className={classes.socialText}>Google</Typography>
            </Button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        {/* <FacebookLogin
          textButton={
            <>
              <Typography className={classes.buttonLineF}></Typography>
              <Typography className={classes.socialText}>Facebook</Typography>
            </>
          }
          size="medium "
          appId="468622841955949"
          autoLoad={false}
          cssClass={classes.facebookButton}
          callback={responseFacebook}
          icon={
            <>
              <Box
                component="img"
                src={facebookIcon}
                alt="google"
                sx={(theme) => ({
                  width: "26px",
                  height: "auto",

                  [theme.breakpoints.down("iph")]: {
                    width: "20px",
                  },
                })}
              />
            </>
          }
        /> */}
       <Box width={"100%"}>
       <LoginSocialFacebook
          appId="1326765214789398"
          onResolve={(res) => console.log("res", res)}
          onReject={(res) => console.log("res", res)}
        >
          <Box className={classes.facebookButton}>
            <Box
              component="img"
              src={facebookIcon}
              alt="google"
              sx={(theme) => ({
                width: "26px",
                height: "auto",

                [theme.breakpoints.down("iph")]: {
                  width: "20px",
                },
              })}
            />
            <Typography className={classes.buttonLineF}></Typography>
            <Typography className={classes.socialText}>Facebook</Typography></Box>
        </LoginSocialFacebook>
       </Box>
      </Stack>
    </>
  );
}

export default BottomLoginButton;
