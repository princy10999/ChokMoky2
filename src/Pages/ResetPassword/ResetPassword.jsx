import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { SimpleInput } from "../../Components/Common/SimpleInput";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { LoginLayout } from "../../Components/Common/LoginLayout";
import { useDispatch } from "react-redux";
import { resetPassword, verifyOtp } from "../../Redux/Actions/AuthUser";
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
    textField2: {
      marginTop: "24px",
      marginBottom: "24px",
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
    err: {
      color: "#EB222C",
      fontSize: "15px",
      lineHeight: "15px",
    },
  };
});
function ResetPassword() {
  const { otp } = useParams();
  const { email } = useParams();
  console.log("otp", otp);
  const location = useLocation();
  console.log("location", location);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const [emailError, setEmailError] = useState("");
  const verifyOTP = async () => {
    dispatch(isLoader(true));
    const body = {
      params: {
        email: email,
        otp: otp,
      },
    };
    const data = await dispatch(verifyOtp(body));
    if (data.payload.error) {
      console.log("error");
    } else {
      console.log("success");
    }
    dispatch(isLoader(false));
  };
  useEffect(() => {
    verifyOTP();
  }, []);
  useEffect(() => {
    document.title = "Signup with Email - Chokmoki";
  }, []);
  const [value, setValue] = React.useState({
    showPassword: true,
    showPassword1: true,
  });
  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };
  const handleClickShowPassword1 = () => {
    setValue({
      ...value,
      showPassword1: !value.showPassword1,
    });
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Please enter a password!")
      .min(6, "Please give atleast 6 character!"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords is not matching!")
      .required("Please confirm your password!"),
  });
  const initialValues = {
    password: "",
    confirm_password: "",
  };
  const onSubmit = async (values, formikHelpers) => {
    dispatch(isLoader(true));
    const body = {
      params: {
        otp: otp,
        password: values.password,
      },
    };
    const data = await dispatch(resetPassword(body));
    if (data.payload.error) {
      setEmailError(data?.payload?.error);
    } else {
      navigate("/login");
    }
    dispatch(isLoader(false));
  };
  return (
    <React.Fragment>
      <LoginLayout
        emailError={emailError}
        text=""
        title="Create new password"
        option=""
        link="/login"
        margin="-60px"
        hight="108%"
        padding="60px 64px 40px 58px"
        mt="37px"
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
                id="password"
                name="password"
                label="Password"
                type="password"
                value={values.password}
                helperText={
                  <Box component="span" className={classes.err} disableGutters>
                    <ErrorMessage name="password" />
                  </Box>
                }
                eye={true}
                showPassword={value.showPassword}
                handleClickShowPassword={handleClickShowPassword}
              />
              <Field
                as={SimpleInput}
                className={classes.textField2}
                fullWidth
                id="confirm_password"
                name="confirm_password"
                label="Confirm Password"
                type="password"
                value={values.confirm_password}
                helperText={
                  <Box component="span" className={classes.err} disableGutters>
                    <ErrorMessage name="confirm_password" />
                  </Box>
                }
                eye1={true}
                showPassword1={value.showPassword1}
                handleClickShowPassword1={handleClickShowPassword1}
              />
              <StyledButton2 text="Change password" />
            </Form>
          )}
        </Formik>
      </LoginLayout>
    </React.Fragment>
  );
}
export default ResetPassword;