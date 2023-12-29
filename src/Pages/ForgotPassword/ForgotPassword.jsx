import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { SimpleInput } from "../../Components/Common/SimpleInput";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { LoginLayout } from "../../Components/Common/LoginLayout";
import { forgetPassword } from "../../Redux/Actions/AuthUser";
import { useDispatch } from "react-redux";
import { isLoader } from "../../Redux/Actions/loaderSlice";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles()((theme) => {
  return {
    forgotForm: {
      paddingTop: "4px",
      paddingBottom: "15px",
      [theme.breakpoints.down("iph")]: {
        paddingTop: "0px",
      },
    },
    textField: {
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
    },
  };
});
function ForgotPassword() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "ForgotPassword - Chokmoki";
  }, []);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Please enter email"),
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
    const data = await dispatch(forgetPassword(body));
    console.log("data", data);
    if (data.payload.error) {
      dispatch(isLoader(false));
      setError(data?.payload?.error?.meaning);
    } else {
      dispatch(isLoader(false));

      navigate("/signup-success", {
        state: {
          success: data?.payload?.result?.status?.meaning,
        },
      });
      // navigate(`/reset-password/${data?.payload?.result?.otp}`, {
      //   state:{
      //     email: values.email
      //   }
      // });
    }
    formikHelpers.resetForm();
  };
  return (
    <LoginLayout
      emailError={error}
      text=""
      title="Forgot Password"
      option="Login?"
      link="/login"
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
          <Form className={classes.forgotForm}>
            <Field
              as={SimpleInput}
              className={classes.textField}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              helperText={
                <Box component="span" className={classes.err} disableGutters>
                  <ErrorMessage name="email" />
                </Box>
              }
            />
            <StyledButton2 text="Submit" />
          </Form>
        )}
      </Formik>
    </LoginLayout>
  );
}
export default ForgotPassword;