import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import { SimpleInput } from "../../Components/Common/SimpleInput";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { LoginLayout } from "../../Components/Common/LoginLayout";
import BottomLoginButton from "../../Components/Common/BottomLoginButton";
import { loginCheack, socialLogin } from "../../Redux/Actions/AuthUser";
import { useDispatch } from "react-redux";
import { isLoader } from "../../Redux/Actions/loaderSlice";
const useStyles = makeStyles()((theme) => {
  return {
    loginForm: {
      paddingTop: "4px",
      [theme.breakpoints.down("iph")]: {
        paddingTop: "0px",
      },
    },
    textField: {
      marginTop: "24px",
      [`& label`]: {
        fontFamily: "League Spartan !important",
        fontWeight: "400 !important",
        fontSize: "19px !important",
        color: "#7E7F84",
        [theme.breakpoints.down("iph")]: {
          fontSize: "16px !important",
        },
      },
      [`& fieldset`]: {
        borderRadius: 0,
      },
      [`& .css-5tvus1-MuiInputBase-root-MuiOutlinedInput-root`]: {
        fontFamily: "League Spartan !important",
        fontWeight: "400 !important",
        fontSize: "19px !important",
        color: "#7E7F84",
        borderRadius: "0px !important",
        [theme.breakpoints.down("iph")]: {
          fontSize: "16px !important",
        },
      },
    },
    forgotText: {
      textAlign: "right",
      paddingTop: "19px",
      paddingBottom: "31px",
      color: "#5C5C63",
      fontFamily: "League Spartan !important",
      fontWeight: "400 !important",
      fontSize: "19px !important",
      lineHeight: "18px !important",
      [theme.breakpoints.down("iph")]: {
        fontSize: "16px !important",
        paddingTop: "16px",
        paddingBottom: "25px",
      },
      "&:hover": {
        color: "#BD3D3D",
      },
      // [theme.breakpoints.down("iph")]: {
      //   paddingTop: " 11px",
      // },
    },
    textForgot: {
      color: "#5C5C63",
      fontFamily: "League Spartan !important",
      fontWeight: "400 !important",
      fontSize: "19px !important",
      lineHeight: "18px !important",
      [theme.breakpoints.down("iph")]: {
        fontSize: "16px !important",
      },
      "&:hover": {
        color: "#BD3D3D",
      },
    },
    loginButton: {
      borderRadius: 0,
      backgroundColor: "#141524",
      padding: "11px",
      "&:hover": {
        backgroundColor: "#141524",
      },
    },
    buttonText: {
      fontFamily: "League Spartan",
      fontSize: "20px",
      display: "flex",
      "&::before": {
        content: '" "',
        height: "2px",
        width: "29px",
        background: "white",
        position: "absolute",
        left: "35%",
        top: 22.5,
        [theme.breakpoints.down("iph")]: {
          width: "18px",
          left: "32%",
          top: 21.5,
        },
        [theme.breakpoints.down("small")]: {
          width: "17px",
          left: "29%",
          top: 20.5,
        },
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "1rem",
      },
    },
    err: {
      color: "#EB222C",
      fontSize: "15px",
    },
  };
});
function Login() {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const { classes } = useStyles();
  useEffect(() => {
    document.title = "Login - Chokmoki";
  }, []);
  const [value, setValue] = React.useState({
    showPassword: true,
  });
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Please enter email/mobile number"),
  });
  const initialValues = {
    email: "",
  };
  const onSubmit = async (values, formikHelpers) => {
    dispatch(isLoader(true));
    const body = {
      params: {
        email: values.email,
      },
    };
    const data = await dispatch(loginCheack(body));
    console.log("data", data);
    if (data.payload.result.verified === "N" && data.payload.result.otp) {
      dispatch(isLoader(false));
      navigate(`/otp-verification/${data?.payload?.result?.otp}/s`);
    } else if (data.payload.result.verified === "N") {
      dispatch(isLoader(false));
      setEmailError(data?.payload?.result?.status?.meaning);
      navigate("/signup-success", {
        state: {
          success: data?.payload?.result?.status?.meaning,
        },
      });
    } else if (
      data.payload.result.status &&
      !data.payload.result.otp &&
      !data.payload.result.type
    ) {
      dispatch(isLoader(false));
      setEmailError(data?.payload?.result?.status?.meaning);
    } else if (data.payload.result.otp && data.payload.result.status) {
      dispatch(isLoader(false));
      navigate(`/otp-verification/${data?.payload?.result?.otp}/l`, {
        state: {
          number: values.email,
        },
      });
    } else if (data.payload.result.type) {
      dispatch(isLoader(false));
      navigate(`/password`, {
        state: {
          email: values.email,
        },
      });
    }
    formikHelpers.resetForm();
  };
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
        action_type: "L"
      }
    }
    const data = await dispatch(socialLogin(body));
    console.log("data",data);
    dispatch(isLoader(false));
    if(data?.payload?.error){
      setEmailError(data?.payload?.error?.meaning);
    }else if(data?.payload?.result){
      localStorage.setItem("token", data?.payload?.result?.token);
      localStorage.setItem(
        "userData",
        JSON.stringify(data?.payload?.result?.userData
          )
      );
      navigate("/");
    }
  };
  return (
    <LoginLayout
      emailError={emailError}
      text="Welcome Back, Please login to continue"
      title="Login"
      option="Create account?"
      link="/signup"
      margin="-60px"
      hight="auto"
      padding="53px 57px 43px 66px"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={classes.loginForm}>
            <Field
              as={SimpleInput}
              className={classes.textField}
              fullWidth
              id="email"
              label="Email Address / Mobile Number"
              name="email"
              helperText={
                <Box component="span" className={classes.err} disableGutters>
                  <ErrorMessage name="email" />
                </Box>
              }
            />
            <Typography className={classes.forgotText}>
              <Link to={"/forgot-password"} className={classes.textForgot}>
                Forgot your password?
              </Link>
            </Typography>
            <StyledButton2 text="Login" />
          </Form>
        )}
      </Formik>
      <BottomLoginButton responseFacebook={responseFacebook} responseGoogle={responseGoogle} />
    </LoginLayout>
  );
}
export default Login;