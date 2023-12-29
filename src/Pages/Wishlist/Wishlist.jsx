import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Grid } from "@mui/material";
import SideBar from "../../Components/Common/SideBar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Editprofileform from "../../Components/Editprofileform";
import Collectioncard from "../../Components/Common/Collectioncard";
import { Stack } from "@mui/system";
import WishlistCart from "../../Components/WishlistCart";

const useStyles = makeStyles()((theme) => {
  return {
    ProductPage: {
      padding: "0px 160px 10px 160px",
      [theme.breakpoints.down("mLaptop")]: {
        padding: "0px 80px 10px 80px",
      },
      [theme.breakpoints.down("xDesktop")]: {
        padding: "0px 60px 10px 60px",
      },
      [theme.breakpoints.down("laptop")]: {
        padding: "0px 39px 10px 39px",
      },
      [theme.breakpoints.down("tab")]: {
        padding: "0px 30px 10px 30px",
      },
      [theme.breakpoints.down("stab")]: {
        padding: "0px 30px 10px 30px",
      },
      [theme.breakpoints.down("iph")]: {
        padding: "0px 10px 10px 10px",
      },
    },
    topColor: {
      backgroundColor: "#FCF8ED",
      height: "3.5rem",
    },
  };
});

const Wishlist = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.ProductPage}>
      <Box className={classes.topColor}></Box>
      <Stack
        direction="row"
        spacing={{ xSmall: 0, iph: 0.8, smallLaptop: 2 }}
        className={classes.imgBox}
      >
        <SideBar />
        <WishlistCart />
      </Stack>
    </Box>
  );
};

export default Wishlist;
