import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
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
    radioBox: {
      display: "flex",
      alignItems: "center",
    },
    radioLabel: {
      fontFamily: "League Spartan",
      fontSize: "18px",
      lineHeight: "16.56px",
      fontWeight: "400",
      marginRight: "20px",
      [theme.breakpoints.down("iph")]: {
        marginRight: "10px",
      },
    },
    addressInformation: {
      fontFamily: "League Spartan",
      fontSize: "22px",
      lineHeight: "20.24px",
      fontWeight: "400",
      marginTop: "20px",
      marginBottom: "20px",
    },
    profileGrid: {
      borderBottom: "9px solid #F4F4F4",
      paddingBottom: "40px",
    },

    uploadButton: {
      textTransform: "none",
      marginRight: "10px",
    },
  };
});
const Editprofileform = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { classes } = useStyles();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Please enter email id!"),
    fname: Yup.string().required("Please enter your first name!"),
    lname: Yup.string().required("Please enter your last name!"),
    mobile: Yup.string()
      .required("Please enter your mobile number!")
      .matches(/^([0-9\s\-+()]*)$/, "Invalid mobile number!")
      .min(10, "Mobile number must be at least 10 characters!")
      .max(10, "Mobile number contains maximum 10 characters!"),
  });

  const initialValues = {
    fname: "",
    lname: "",
    mobile: "",
    email: "",
  };
  const onSubmit = (values, formikHelpers) => {
    console.log("Signup", values);
    formikHelpers.resetForm();
  };
  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Edit Profile</Typography>

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
              <Grid item mobile={2} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="fname"
                  label="First Name"
                  name="fname"
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
              <Grid item mobile={2} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="lname"
                  label="Last Name"
                  name="lname"
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
              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="emailId"
                  label="Email id"
                  name="emailId"
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

              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="mobileNumber"
                  label="Mobile number"
                  name="mobileNumber"
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
              <Grid item mobile={4} xSmall={4} className={classes.radioBox}>
                <Box className={classes.radioBox}>
                  <FormLabel id="gender" className={classes.radioLabel}>
                    Gender :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="gender"
                    name="gender"
                    value={value}
                    onChange={handleChange}
                    className={classes.radioGroup}
                  >
                    <Stack direction="row" spacing={{ xTab: 2, xSmall: 1 }}>
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Stack>
                  </RadioGroup>
                </Box>
              </Grid>

              <Grid item mobile={8} xSmall={4}>
                <Typography className={classes.addressInformation}>
                  Address Information:
                </Typography>
              </Grid>
              <Grid item mobile={8} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="address"
                  label="Address"
                  name="address"
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
              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="city"
                  label="Town / City"
                  name="city"
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
              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="state"
                  label="State"
                  name="state"
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
              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="region"
                  label="Country / Region"
                  name="region"
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
              <Grid item mobile={4} xSmall={4}>
                <Field
                  as={SimpleInput}
                  className={classes.textField}
                  id="ZIPCode"
                  label="ZIP Code"
                  name="ZIPCode"
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
              <Grid item mobile={4} xSmall={4}>
                <Button
                  variant="contained"
                  component="label"
                  size="large"
                  className={classes.uploadButton}
                >
                  Upload Profile Image
                  <input hidden accept="image/*" type="file" />
                </Button>
                <Box
                  className={classes.cardImage}
                  component="img"
                  src={profile}
                  alt=""
                  sx={(theme) => ({
                    width: "50px",
                    height: "50px",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  })}
                />
              </Grid>
            </Grid>
            <StyledButton3 text="Save & Continue"  width="230px"/>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Editprofileform;
