import { Container, Box, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import Heading from "../../Components/Common/Heading";
import enTop from "../../Assests/images/conBg2.png";
import enRight from "../../Assests/images/envelopRight.png";
import enLeft from "../../Assests/images/envelopLeft.png";
import stamp from "../../Assests/images/stamp.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Typography } from "antd";

const useStyles = makeStyles()((theme) => {
  return {
    contact: {
      margin: "111px 0",
    },
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
    form: {
      marginTop: "254px",
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      background: "#DFBCA0",
      borderTop: "10px solid #DFBC95",
      borderLeft: "5px solid #DFBC95",
      borderRight: "5px solid #DFBC95",
      boxShadow: "0px 0px 23px rgba(0, 0, 0, 0.08)",
      padding: "41px 35px 47px 35px",
    },
    enTop: {
      position: "absolute",
      left: "0px",
      top: "12px",
      maxHeight: "100%",
      maxWidth: "100%",
      width: "100%",
      height: "222px",
      transformOrigin: "bottom",
      transform: "translateY(-100%)",
    },
    enLeft: {
      position: "absolute",
      left: "1px",
      transformOrigin: "right",
      transform: "translateX(-100%)",
      bottom: "0px",
      width: "81px",
      height: "100%",
      backgroundColor: "#DFBC95",
      clipPath: "polygon(100% 0, 100% 100%, 0% 89.5%, 0% 10.5%)",
    },
    enRight: {
      position: "absolute",
      bottom: "0px",
      right: "1px",
      transformOrigin: "left",
      transform: "translateX(100%)",
      width: "81px",
      height: "100%",
      backgroundColor: "#DFBC95",
      clipPath: "polygon(100% 10.5%, 100% 89.5%, 0 100%, 0 0)",
    },
    err: {
      color: "#EB222C",
      fontSize: "15px",
    },
    stamp: {
      position: "absolute",
      top: "36px",
      right: "36px",
      width: "91px",
      height: "109px",
      maxHeight: "100%",
      maxWidth: "100%",
    },
    msg: {
     
      paddingRight: "60px",
      marginTop: "35px",
      [`& label`]: {
        fontFamily: "League Spartan",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "19px",
        lineHeight: "17px",
        letterSpacing: "0.03em",
        color: "#484954",
      },
      [`& textarea`]: {
        textAlign:"center",
        "&::placeholder":{
          fontFamily: "League Spartan",
        fontStyle: "normal",
        fontWeight: 400,
        opacity:1,
        fontSize: "19px",
        marginTop:"20%",
        lineHeight: "320px",
        letterSpacing: "0.03em",
        color: "#484954",
        }
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "0px !important",
      },
    },
    name: {
      marginTop: "97px",
      [`& label`]: {
        fontFamily: "League Spartan",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "19px",
        lineHeight: "17px",
        letterSpacing: "0.03em",
        color: "#484954",
      },
    },
    field: {
      marginTop: "24px",
      [`& label`]: {
        fontFamily: "League Spartan",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "19px",
        lineHeight: "17px",
        letterSpacing: "0.03em",
        color: "#484954",
      },
    },
    field1: {
      gap: "8px",
      [`& label`]: {
        fontFamily: "League Spartan",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "19px",
        lineHeight: "17px",
        letterSpacing: "0.03em",
        color: "#484954",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "0px !important",
        width: "40px",
        height: "43px",
      },
    },
    phone: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "24px",
    },
    label: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "19px",
      lineHeight: "17px",
      letterSpacing: "0.03em",
      color: "#484954",
    },
    butto: {
      margin: "30px auto 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "48%",
    },
    enlop: {
      position: "relative",
    },
    rightgrid: {
      position: "relative",
      "&:before": {
        content: '""',
        position: "absolute",
        width: "1px",
        height: "360px",
        top: "34PX",
        bottom: "7px",
        left: "-30px",
        backgroundColor: "rgba(0,0,0,0.4)",
      },
    },
  };
});

function ContactUs() {
  const { classes } = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Chokmoki | Contact Us";
  }, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your name!"),
    subject: Yup.string().required("Please enter subject!"),
    message: Yup.string().required("Please enter message!"),
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Please enter your email!"),
    phone: Yup.string()
      .required("Please enter your mobile number!")
      .matches(/^([0-9\s\-+()]*)$/, "Invalid mobile number!")
      .min(10, "Mobile number must be at least 10 characters!")
      .max(10, "Mobile number contains maximum 10 characters!"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  };
  const onSubmit = (values, formikHelpers) => {
    console.log("contact", values);
    formikHelpers.resetForm();
  };
  return (
    <Box component="div" className={classes.contact}>
      <Container className={classes.cont}>
        <Heading
          title="Contact Us"
          bgText="C"
          fontFamily="Playfair Display, serif"
          subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
          size="52px"
          tabsize="36px"
          iphsize="28px"
          h="120px"
          tabh="105px"
          iphh="84px"
          tabbott="67px"
          lapbott="67px"
          iphbott="60px"
          smallbott="74px"
          smallsize="24px"
        />
        <Box component="div" className={classes.enlop}>
          <Box component="img" className={classes.enTop} src={enTop} alt="" />
          <Box component="span" className={classes.enLeft}></Box>
          <Box component="span" className={classes.enRight}></Box>
          <Box component="div" className={classes.form}>
            <Box component="img" src={stamp} alt="" className={classes.stamp} />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className={classes.loginForm}>
                  <Grid container>
                    <Grid
                      item
                      xsmall={12}
                      small={12}
                      mobile={12}
                      tab={6}
                      laptop={6}
                      desktop={6}
                    >
                      <Field
                        as={TextField}
                        multiline
                        rows={14}
                        name="message"
                        id="outlined-basic"
                        // label="Type your message here"
                        placeholder="Type your message here"
                        variant="outlined"
                        fullWidth
                        className={classes.msg}
                        helperText={
                          <Box
                            component="span"
                            className={classes.err}
                            disableGutters
                          >
                            <ErrorMessage name="message" />
                          </Box>
                        }
                      />
                    </Grid>
                    <Grid
                      item
                      xsmall={12}
                      small={12}
                      mobile={12}
                      tab={6}
                      laptop={6}
                      desktop={6}
                      className={classes.rightgrid}
                    >
                      <Grid container>
                        <Grid
                          item
                          xsmall={12}
                          small={12}
                          mobile={12}
                          tab={12}
                          laptop={12}
                          desktop={12}
                        >
                          <Field
                            as={TextField}
                            name="name"
                            label="Name"
                            id="name"
                            variant="standard"
                            fullWidth
                            className={classes.name}
                            helperText={
                              <Box
                                component="span"
                                className={classes.err}
                                disableGutters
                              >
                                <ErrorMessage name="name" />
                              </Box>
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          xsmall={12}
                          small={12}
                          mobile={12}
                          tab={12}
                          laptop={12}
                          desktop={12}
                        >
                          <Field
                            as={TextField}
                            name="email"
                            label="Email Address"
                            id="email"
                            variant="standard"
                            fullWidth
                            className={classes.field}
                            helperText={
                              <Box
                                component="span"
                                className={classes.err}
                                disableGutters
                              >
                                <ErrorMessage name="email" />
                              </Box>
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          xsmall={12}
                          small={12}
                          mobile={12}
                          tab={12}
                          laptop={12}
                          desktop={12}
                        >
                          <Field
                            as={TextField}
                            name="subject"
                            label="Subjects"
                            id="subject"
                            variant="standard"
                            fullWidth
                            className={classes.field}
                            helperText={
                              <Box
                                component="span"
                                className={classes.err}
                                disableGutters
                              >
                                <ErrorMessage name="subject" />
                              </Box>
                            }
                          />
                        </Grid>
                        <Grid
                          item
                          xsmall={12}
                          small={12}
                          mobile={12}
                          tab={12}
                          laptop={12}
                          desktop={12}
                        >
                          <Box className={classes.phone}>
                            <Typography variant="p" className={classes.label}>
                              Phone
                            </Typography>
                            <MuiOtpInput
                              length={10}
                              value={values.phone}
                              name="phone"
                              onChange={(e) => {
                                setFieldValue("phone", e);
                              }}
                              className={classes.field1}
                            />
                          </Box>
                          <Box
                            component="span"
                            className={classes.err}
                            disableGutters
                          >
                            <ErrorMessage name="phone" />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Box component="div" className={classes.butto}>
                    <StyledButton2 text="Send Message" onClick={onSubmit} />
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
