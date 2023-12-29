import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";
import * as Yup from "yup";
import { LoginLayout } from "../../Components/Common/LoginLayout";
import OtpInput from "react-otp-input";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginCheackWithOtp, mobileVerify } from "../../Redux/Actions/AuthUser";
import swal from "sweetalert";
import { isLoader } from "../../Redux/Actions/loaderSlice";
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
function OtpVerification() {
  const [otpError, setOtpError] = useState("");
  const { code } = useParams();
  const { type } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [otp, setOtp] = useState({ otp: "" });
  useEffect(() => {
    document.title = "Otp Verification - Chokmoki";
  }, []);
  const handleChange = (otp) => setOtp({ otp });
  const initialValues = {
    otp: "",
  };
  const onSubmit = async () => {
    if(otp?.otp < 6){
      setOtpError("Please Enter Otp!");
    }else{
      dispatch(isLoader(true));
      const body = {
        params: {
          otp: otp.otp,
        },
      };
      const data = await dispatch(mobileVerify(body));
      if (data.payload.error) {
        dispatch(isLoader(false));
        setOtpError("Please enter otp.");
      } else {
        dispatch(isLoader(false));
        swal({
          title: "success",
          text: data?.payload?.result?.status?.meaning,
          icon: "success",
        }).then((res) => res && navigate("/login"));
      }
      console.log(data);
    }
  };
  const onSubmit2 = async () => {
    if(otp?.otp < 6){
      setOtpError("Please Enter Otp!");
    }else{
      dispatch(isLoader(true));
    const body = {
      params: {
        phone: location?.state?.number,
        otp: otp?.otp,
      },
    };
    const data = await dispatch(loginCheackWithOtp(body));
    if (data.payload.error) {
      dispatch(isLoader(false));
      setOtpError(data?.payload?.error?.meaning);
    } else {
      dispatch(isLoader(false));
      localStorage.setItem("token", data?.payload?.result?.token);
      localStorage.setItem(
        "userData",
        JSON.stringify(data?.payload?.result?.userdata)
      );
      navigate("/");
    }
    console.log(data);
    }
  };
  return (
    <LoginLayout
      emailError={otpError}
      text="Please enter the verification, send to your mobile no."
      title={`OTP verification : ${code}`}
      option="Resend Code"
      link="#"
      margin="-120px"
      hight="auto"
      padding="112px 64px 79px 58px"
      mt="67px"
    >
      <Box component="div" disableGutters className={classes.signup}>
        <Formik
          initialValues={initialValues}
          onSubmit={type === "s" ? onSubmit : onSubmit2}
        >
          {({ values, setFieldValue }) => (
            <Form className={classes.loginForm}>
              <OtpInput
                value={otp.otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span className="otpspace"></span>}
                inputStyle={"inputStyle"}
                focusStyle={"focusStyle"}
              />
              <Box component="div" sx={{ mt: "30px" }}>
                <StyledButton2 text="Verification" />
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </LoginLayout>
  );
}
export default OtpVerification;