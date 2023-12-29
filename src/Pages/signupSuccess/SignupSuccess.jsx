import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import StyledButton2 from "../../Components/Common/StyledButton2";
const useStyles = makeStyles()((theme) => {
  return {
    main: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    title:{
      width: '60%',
      textAlign: 'center',
      marginBottom: '10px'
    }
  };
});
const SignupSuccess = () => {
  const location = useLocation()
  const { classes } = useStyles();
  return (
    <Box className={classes.main}>
      <Typography variant="h5" className={classes.title}>
        {location?.state?.success}
      </Typography>
      <Typography variant="h6" className={classes.title}></Typography>
      <Link to="/login">
        <StyledButton2 text="Go To Login" />
      </Link>
    </Box>
  );
};
export default SignupSuccess;