import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import StyledButton2 from "../../Components/Common/StyledButton2";
import { emailVerify } from "../../Redux/Actions/AuthUser";
import { isLoader } from "../../Redux/Actions/loaderSlice";
const useStyles = makeStyles()((theme) => {
  return {
    main: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  };
});
const EmailVerification = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const emailVerifications = async (ids) => {
    dispatch(isLoader(true));
    const body = {
      params: {
        random: ids,
      },
    };
    const data = await dispatch(emailVerify(body));
    console.log("data",data);
    dispatch(isLoader(false));
    setValue(data.payload);
  };
  useEffect(() => {
    if(id){
        emailVerifications(id);
    }
  }, [id]);
  return (
    <Box className={classes.main}>
      {value.error && (
        <>
          <Typography variant="h5" className={classes.title}>
            Error
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {value.error.message}
          </Typography>
        </>
      )}
      {value?.result?.status && (
        <>
          <Typography variant="h5" className={classes.title}>
            Success
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {value?.result?.status?.meaning}
          </Typography>
        </>
      )}
      <Link to="/login"
      >
        <StyledButton2 text="Go To Login" />
      </Link>
    </Box>
  );
};
export default EmailVerification;