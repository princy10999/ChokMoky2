import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import BestSelling from "../../Components/BestSelling";
import ProductPart from "../../Components/ProductPart";
import CompatibleProduct from "./../../Components/CompatibleProduct";
import SimilarProduct from './../../Components/SimilarProduct';

const useStyles = makeStyles()((theme) => {
  return {
    ProductPage: {
      margin:"auto",
      marginTop: "110px",
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
        marginTop: "85px",
      },
      [theme.breakpoints.down("tab")]: {
        marginTop: "75px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
        marginTop: "25px",
      },
    },
  };
});

const ProductDetails = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.ProductPage}>
      <ProductPart />
      <CompatibleProduct />
      <SimilarProduct/>
     
    </Box>
  );
};

export default ProductDetails;
