import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";
import { LoginLayout } from "../../Components/Common/LoginLayout";
import BottomLoginButton from "../../Components/Common/BottomLoginButton";
import SignupButton from "../../Components/Common/SignuoButton";
import { useDispatch } from "react-redux";
import { socialLogin } from "../../Redux/Actions/AuthUser";
import { isLoader } from "../../Redux/Actions/loaderSlice";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const useStyles = makeStyles()((theme) => {
  return {
    signup: {
      paddingTop: "33px",
      width: "467px",
      [theme.breakpoints.down("laptop")]: {
        width: "97%",
        margin: "0 auto",
      },
    },
  };
});

function Signup() {
  const { classes } = useStyles();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    document.title = "Signup - Chokmoki";
  }, []);
  const responseFacebook = (response) => {
    console.log(response);
  };
  const responseGoogle = async (res) => {
    dispatch(isLoader(true));
    console.log("respose", res);
    const body = {
      params: {
        social_id: res?.googleId,
        type: "G",
        first_name: res?.profileObj?.familyName,
        last_name: res?.profileObj?.givenName,
        email: res?.profileObj?.email,
        action_type: "S"
      }
    }
    const data = await dispatch(socialLogin(body));
    console.log("data",data);
    dispatch(isLoader(false));
    if(data?.payload?.result){
      swal({
        title: "success",
        text: "Registration Successfully",
        icon: "success",
      })
      navigate("/login");
    }else{
      swal({
        title: "Warning",
        text: data?.payload?.error?.meaning,
        icon: "warning",
      })
    }
  };
  return (
    <LoginLayout
      text="Please choose one option to signup on Chokmoki"
      title="Sign Up"
      option="Login"
      link="/login"
      margin="-120px"
      hight="auto"
      padding="58px 66px 53px 56px"
    >
      <Box component="div" disableGutters className={classes.signup}>
        <SignupButton text="Signup with Email Id" link="/signup-with-email" />
        <SignupButton text="Signup with Mobile Number" link="/signup-with-mobile" />
      </Box>
      <BottomLoginButton responseGoogle={responseGoogle} responseFacebook={responseFacebook}/>
    </LoginLayout>
  );
}

export default Signup;
