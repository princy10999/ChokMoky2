import React from "react";
import { makeStyles } from "tss-react/mui";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import profile from "../Assests/images/images 6.png";
import { SimpleInput } from "../Components/Common/SimpleInput";
import StyledButton3 from "./Common/StyledButton3";

const useStyles = makeStyles()((theme) => {
  return {
    profileHead: {
      fontFamily: "League Spartan",
      fontSize: "25px",
      lineHeight: "23px",
      fontWeight: "500",
      marginTop: "30px",
      marginBottom: "30px",
    },
    profileGrid: {
        borderBottom: "9px solid #F4F4F4",
        paddingBottom: "40px",
      },
  };
});

const ChangePasswordForm = () => {
  const { classes } = useStyles();

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string().required("Please enter your newPassword!"),

    reEnterPassword: Yup.string().required(
      "Please enter your reEnterPassword!"
    ),
    currentPassword: Yup.string().required(
      "Please enter your currentPassword!"
    ),
  });

  const initialValues = {
    newPassword: "",
    reEnterPassword: "",
    currentPassword: "",
  };
  const onSubmit = (values, formikHelpers) => {
    console.log("Signup", values);
    formikHelpers.resetForm();
  };
  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Change password</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className={classes.loginForm}>
            <Grid
              container
              className={classes.profileGrid}
              spacing={{
                xSmall: 1,
                laptop: 2,
                smallLaptop: 2,
                desktop: 2,
              }}
              columns={{ xSmall: 4, mobile: 8, tab: 8, laptop: 8 }}
            >
              <Grid item mobile={6} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="currentPassword"
                  label="Current Password"
                  name="currentPassword"
                  marginr="23px"
                  helperText={
                    <Box
                      component="span"
                      className={classes.err}
                      disableGutters
                    >
                      <ErrorMessage name="fname" />
                    </Box>
                  }
                />
              </Grid>
              <Grid item mobile={6} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="newPassword"
                  label="New Password"
                  name="newPassword"
                  helperText={
                    <Box
                      component="span"
                      className={classes.err}
                      disableGutters
                    >
                      <ErrorMessage name="lname" />
                    </Box>
                  }
                />
              </Grid>
              <Grid item mobile={6} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="reEnterPassword"
                  label="Re Enter Password"
                  name="reEnterPassword"
                  helperText={
                    <Box
                      component="span"
                      className={classes.err}
                      disableGutters
                    >
                      <ErrorMessage name="lname" />
                    </Box>
                  }
                />
              </Grid>
            </Grid>

          
            <StyledButton3 text="Submit" width="179px" />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ChangePasswordForm;
