import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Grid, Typography, TextField, Stack } from "@mui/material";
import productImage from "../Assests/images/new2.png";
import starActive from "../Assests/images/fillStar.svg";
import starAsh from "../Assests/images/grayStar.svg";
import ProductSlider from "./ProductSlider";
import StyledButton1 from "./Common/StyledButton1";
import StyledButton2 from "./Common/StyledButton2";
import Counter from './Common/Counter';

const useStyles = makeStyles()((theme) => {
  return {
    // ProductPart: {
    //   padding: "0px 45px 11px 45px",
    // },
    gridContainer: {
      flexWrap: "nowrap",
      [theme.breakpoints.down("laptop")]: {
        flexWrap: "wrap",
      },
    },
    imgSlider: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    headingProduct: {
      fontFamily: "Playfair Display",
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "39px",
      color: "#494A67",
      marginBottom: "20px",
      [theme.breakpoints.down("tab")]: {
        fontSize: "28px",
        fontWeight: "400",
        lineHeight: "39px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "39px",
      },
    },
    priceSocial: {
      paddingBottom: "15px ",
      borderBottom: "1px solid #E3E3E3",
      marginBottom: "20px",
    },
    ProductImage: {
      display: "flex",
      position:"relative"
    },

    price: {
      fontFamily: "League Spartan, sans-serif",
      fontSize: "30px",
      fontWeight: "500",
      lineHeight: "27.6px",
      color: "#3D3D47",
    },
    priceline: {
      fontFamily: "League Spartan, sans-serif",
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "18.4px",
      color: "#787877",
      textDecoration: "line-through",
    },
    textShare: {
      fontFamily: "League Spartan, sans-serif",
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "30px",
      color: "#2D2E30",
    },
    specificationHead: {
      fontFamily: "Nunito",
      fontSize: "21px",
      fontWeight: "400",
      lineHeight: "19.32px",
      color: "#5C5C63",
      marginBottom: "15px",
      [theme.breakpoints.down("tab")]: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "19.32px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "19.32px",
      },
    },
    specificationPera: {
      fontFamily: "Nunito",
      fontSize: "17px",
      fontWeight: "400",
      lineHeight: "25px",
      color: "#818183",
      marginBottom: "20px",
    },
    specificationContent: {
      fontFamily: "Nunito",
      fontSize: "17px",
      fontWeight: "500",
      lineHeight: "29px",
      color: "#61616A",
      marginBottom: "15px",
    },
    specificationWeight2: {
      color: "#818183",
    },
    reviewCon: {
      fontFamily: "League Spartan, sans-serif",
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      [theme.breakpoints.down("mobile")]: {
        flexWrap: "wrap",
      },
    },
    pinCodeBox: {
      marginBottom: "10px",
    },
    stars: {
      padding: " 0px 7px 0px 0px",
    },
    starImage: {
      paddingLeft: "4px",
    },
    productImages: {
      width: "calc(100% - 120px)",
        marginLeft:"10px",
      [theme.breakpoints.down("laptop")]: {
        height:"500px",
        marginLeft:"10px",
        marginTop:"10px"
      },
      [theme.breakpoints.down("tab")]: {
        height:"450px",
        marginLeft:"10px",
        marginTop:"0px"
      },
      [theme.breakpoints.down("mobile")]: {
        width: "calc(100% - 90px)",
        height:"350px",
        marginLeft:"10px",
        marginTop:"10px"
      },
    },
    wishlistIcon:{
      position:"absolute",
      right:"0",
      margin:"20px 10px"
    },
    review: {
      display: "flex",
    },
    reviewText: {
      color: "#858A8C",
      fontWeight: "400",
      fontSize: "14px",
      [theme.breakpoints.down("tab")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "11px",
      },
    },
    reviewNum: {
      fontSize: "14px",
      color: "#2E3233",
      fontWeight: "600",

      [theme.breakpoints.down("tab")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "11px",
      },
    },
    sideImg: {
      padding: "10px",
    },
    textField: {
      width: "44%",
    },

    helpText: {
      fontFamily: "Nunito",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "14.72px",
      color: "#61616A",
      marginBottom: "23px",
    },
    checkText: {
      fontFamily: "Nunito",
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "16.56px",
      color: "#BD3D3D",
    },
    buttons: {
      display:"flex",
      width: "100%",
      [theme.breakpoints.down("mobile")]: {
        display: "block",
      },
    },
    buttons1: {
      marginRight:"1%",
      width: "49%",
      [theme.breakpoints.down("mobile")]: {
        marginRight: "0%",
         width: "100%",
      },
    },
    buttons2: {
      marginLeft:"1%",
      width: "49%",
      [theme.breakpoints.down("mobile")]: {
        marginLeft: "0%",
        marginTop:"2%",
        width: "100%",
      },
    }
  };
});

const ProductPart = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Box className={classes.ProductPart}>
        <Grid
          container
          spacing={{ xSmall: 2, laptop: 3 }}
          columns={{ xSmall: 12 }}
          className={classes.gridContainer}
        >
          <Grid item xSmall={12} tab={7} laptop={6} className={classes.ProductImage}>
            <ProductSlider />
            <Box
              className={classes.productImages}
              component="img"
              src={productImage}
              alt=""
            />
            <svg className={classes.wishlistIcon} width="25" height="25" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.235 2.03375C17.7881 1.58663 17.2575 1.23194 16.6734 0.989948C16.0894 0.747956 15.4634 0.623403 14.8313 0.623403C14.1991 0.623403 13.5731 0.747956 12.9891 0.989948C12.405 1.23194 11.8744 1.58663 11.4275 2.03375L10.5 2.96125L9.5725 2.03375C8.66977 1.13102 7.4454 0.623871 6.16875 0.623871C4.8921 0.623871 3.66773 1.13102 2.765 2.03375C1.86227 2.93648 1.35512 4.16085 1.35512 5.4375C1.35512 6.71415 1.86227 7.93852 2.765 8.84125L3.6925 9.76875L10.5 16.5762L17.3075 9.76875L18.235 8.84125C18.6821 8.39434 19.0368 7.86371 19.2788 7.27969C19.5208 6.69566 19.6453 6.06968 19.6453 5.4375C19.6453 4.80532 19.5208 4.17934 19.2788 3.59531C19.0368 3.01129 18.6821 2.48066 18.235 2.03375V2.03375Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Grid>
          <Grid item xSmall={12} tab={5} laptop={6}>
            <Box className={classes.ProductText}>
              <Typography component="h6" className={classes.headingProduct}>
                Happier than Ever Oxidised Owning with Butterfly Bracelet in 925
                Silver
              </Typography>
              <Box component="div" className={classes.reviewCon}>
                <Box component="div" className={classes.stars}>
                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starActive}
                    alt=""
                    sx={(theme) => ({
                      width: "1.3rem",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    })}
                  />

                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starActive}
                    alt=""
                    sx={(theme) => ({
                      width: "1.3rem",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    })}
                  />

                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starActive}
                    alt=""
                    sx={(theme) => ({
                      width: "1.3rem",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    })}
                  />
                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starActive}
                    alt=""
                    sx={(theme) => ({
                      width: "1.3rem",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    })}
                  />
                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starAsh}
                    alt=""
                    sx={(theme) => ({
                      width: "1.3rem",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    })}
                  />
                </Box>
                <Box component="div" className={classes.review}>
                  <Typography component="p" className={classes.reviewNum}>
                    (4.0)
                  </Typography>
                  <Typography component="p" className={classes.reviewText}>
                    10 Reviews
                  </Typography>
                </Box>
              </Box>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.priceSocial}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={classes.priceText}
                >
                  <Typography component="p" className={classes.price}>
                    ₹300/-
                  </Typography>
                  <Typography component="p" className={classes.priceline}>
                    ₹410.00
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  className={classes.socialIcon}
                >
                  {" "}
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className={classes.shareIcon}
                  >
                    <Typography component="p" className={classes.Share}>
                      img
                    </Typography>
                    <Typography component="p" className={classes.textShare}>
                      Share :
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    className={classes.socialImg}
                  >
                    <Typography component="p" className={classes.socialContent}>
                      soial img
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Typography component="h5" className={classes.specificationHead}>
                Specification:
              </Typography>
              <Typography component="p" className={classes.specificationPera}>
                Silver Enamelled Cuff Bracelet with Green Quartz Accents.
                Crafted in 925 Silver with a Shiny Oxidised Finish. Uniquely
                handcrafted, no two pieces are exactly alike!
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.specificationContent}
              >
                <Typography
                  component="p"
                  className={classes.specificationWeight}
                >
                  Gross Weight :
                </Typography>
                <Typography
                  component="p"
                  className={classes.specificationWeight2}
                >
                  9.000 g
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.specificationContent}
              >
                <Typography component="p" className={classes.specificationSize}>
                  Size:
                </Typography>
                <Typography
                  component="p"
                  className={`${classes.specificationSize2} ${classes.specificationWeight2}`}
                >
                  57.8 mm (Current Size 2.4 Anna Fits well from 2.2 to 2.6 Anna)
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.specificationContent}
              >
                <Typography
                  component="p"
                  className={classes.specificationLength}
                >
                  Length:
                </Typography>
                <Typography
                  component="p"
                  className={`${classes.specificationLength2} ${classes.specificationWeight2}`}
                >
                  5.7 cm
                </Typography>
                <Typography
                  component="p"
                  className={classes.specificationLength}
                >
                  | Breadth:
                </Typography>
                <Typography
                  component="p"
                  className={`${classes.specificationLength2} ${classes.specificationWeight2}`}
                >
                  4.9 cm
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.pinCodeBox}
              >
                <Counter />
                <TextField
                  id="outlined-helperText"
                  label="Enter Delivery Pincode"
                  size="small"
                  className={classes.textField}
                />

                <Typography component="a" className={classes.checkText}>
                  Check
                </Typography>
              </Stack>
              <Typography component="div" className={classes.helpText}>
                Enter pincode for product availability
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.pinCodeBox}
              >
                <Box className={classes.buttons}>
                  <Box className={classes.buttons1}>
                    <StyledButton1 text="Add to cart" link="#" />
                  </Box>
                  <Box className={classes.buttons2}>
                    <StyledButton2 text="Buy Now" />
                  </Box>
                </Box>

              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductPart;
