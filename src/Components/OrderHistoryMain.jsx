import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Typography } from "@mui/material";

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

const OrderHistoryMain = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Order History</Typography>
    </Box>
  );
};

export default OrderHistoryMain
