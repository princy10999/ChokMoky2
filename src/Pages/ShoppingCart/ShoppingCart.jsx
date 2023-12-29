import { Box, Container } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import Heading from "../../Components/Common/Heading";
import ShoppingCartTable from "../../Components/ShoppingCartTable";
import ShoppingCartStep from "../../Components/ShoppingCartStep";
import ShoppingCartBottom from "../../Components/ShoppingCartBottom";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      padding: "180px 0px 22px",
      height: "100%",
      maxWidth: "1200px",
      letterSpacing: "0.02em",
      fontStyle: "normal",
      fontWeight: "lighter",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    Img: {
      height: "8vh",
    },
  };
});

const steps = [
  "Shopping Cart",
  "Checkout & Delivery Options",
  "Successfully Purchased",
];

const ShoppingCart = () => {
  const { classes, cx } = useStyles();

  return (
    <Box className={classes.main}>
      <Container className={classes.cont}>
        <Heading
          title="Shopping Cart"
          subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
          bgText="S"
          fontFamily="League Spartan"
          h="130px"
          tabh="105px"
          iphh="90px"
          tabbott="50px"
        />
        <ShoppingCartStep />
        <ShoppingCartTable />
        <ShoppingCartBottom />
      </Container>
    </Box>
  );
};

export default ShoppingCart;
