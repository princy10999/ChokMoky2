import React from "react";
import { makeStyles } from "tss-react/mui";
import { useLocation } from "react-router-dom";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import wishList from "../../Assests/images/hearts.png";
import sale from "../../Assests/images/sale_img.png";
import starActive from "../../Assests/images/Star-active.png";
import starAsh from "../../Assests/images/Star-ash.png";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      ".WishListC": {
        display: "none",
      },
      "&:hover .WishListC": {
        display: "flex",
      },
    },
    cardLayout: {
      margin: "5rem 0rem 1rem 0rem",
      padding: "0rem  5rem",
      [theme.breakpoints.down("laptop")]: {
        margin: "3rem  0rem 1rem 0",
      },
      [theme.breakpoints.down("tab")]: {
        padding: "0rem  3rem",
      },
      [theme.breakpoints.down("mobile")]: {
        padding: "0rem  1rem",
        margin: "1rem 0rem",
      },
    },
    imgContainer: {
      position: "relative",
      overflow:"hidden"
    },

    WishListC: {
      position: "absolute",
      top: "0px",
      right: "0px",
      backgroundColor: "white",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px",
      padding: "10px",

      cursor: "pointer",
      [theme.breakpoints.down("iph")]: {
        padding: "7px",
        margin: "6px",
      },
      "&:hover": {
        backgroundColor: "#BD3D3D",
        "svg path": {
          stroke: "#fff",
        },
      },
    },
    displayNone: {
      display: "none",
    },

    saleC: {
      position: "absolute",
      top: "1rem",
      left: "0px",
    },
    textContainer: {
      margin: "0.6rem 0rem 2rem 0rem",
      [theme.breakpoints.down("mobile")]: {
        margin: "0.2rem 0rem",
      },
    },
    stars: {
      display: "flex",
      padding: " 0px 7px 0px 0px",
    },
    review: {
      display: "flex",
    },
    reviewCon: {
      fontFamily: "League Spartan, sans-serif",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      [theme.breakpoints.down("mobile")]: {
        flexWrap: "wrap",
      },
    },
    reviewText: {
      color: "#858A8C",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "25px",
      fontFamily: "Noto Sans",
      paddingLeft: "5px",
      whiteSpace: "nowrap",
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
      lineHeight: "25px",
      fontWeight: "600",
      fontFamily: "Noto Sans",

      [theme.breakpoints.down("tab")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "11px",
      },
    },
    headingProduct: {
      fontFamily: "league spartan, sans-serif",
      // fontSize: "19px",
      // lineHeight:1,
      color: "#2F2F2D",
      fontWeight: "400",
      marginTop: "16px",
      [theme.breakpoints.down("desktop")]: {
        fontSize: "25px",
        lineHeight: "23px",
      },
      [theme.breakpoints.down("laptop")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "14px",
      },
      //   [theme.breakpoints.down("iph")]: {
      //     fontSize: "26px",
      //   },
      //   [theme.breakpoints.down("small")]: {
      //     fontSize: "14px",
      //   },
      //   [theme.breakpoints.down("Xsmall")]: {
      //     fontSize: "10px",
      //   },
    },
    starImage: {
      paddingLeft: "4px",
      "&:first-child": {
        paddingLeft: "0px",
      },
    },
    productText: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "17px",
      lineHeight: "25px",
      color: "#858A8C",
      fontWeight: "400",
      marginTop: "11px",
      // [theme.breakpoints.down("desktop")]: {
      //   lineHeight: "18px",
      // },
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
        marginTop: "0px",
      },
    },
    priceText: {
      marginTop: "16px",
      fontWeight: "400",
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
        marginTop: "0px",
      },
    },
    priceline: {
      color: "#787877",
      textDecoration: " line-through",
      fontSize: "17px",
      lineHeight: "21.34px",
      fontFamily: "Mulish",
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
      },
    },
    price: {
      color: "#2F2F2D",
      fontSize: "17px",
      lineHeight: "21.34px",
      fontFamily: "Mulish",
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
      },
    },
    cardImage: {
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  };
});

const Collectioncard = ({ cardData, fontSize, lineHeight }) => {
  const { classes } = useStyles();
  const location = useLocation();
  console.log("location", location);

  return (
    <>
      {cardData.map((item, index) => (
        <Grid item xSmall={2} mobile={4} laptop={4} key={index}>
          <Box
            disableGutters
            className={
              location?.pathname === "/search" &&
              location?.pathname === "/category-search" &&
              classes.cont
            }
          >
            <Box component="div" className={classes.imgContainer}>
              <Box
                className={classes.cardImage}
                component="img"
                src={item.image}
                alt=""
                sx={(theme) => ({
                  width: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                })}
              />
              {(location?.pathname === "/search" ||
                location?.pathname === "/category-search") && (
                <Box
                  className={classes.saleC}
                  component="img"
                  src={sale}
                  alt=""
                  sx={(theme) => ({
                    width: "auto",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  })}
                />
              )}

              {location?.pathname === "/search"}
              <Box component="div" className={`${classes.WishListC} WishListC`}>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.235 2.03375C17.7881 1.58663 17.2575 1.23194 16.6734 0.989948C16.0894 0.747956 15.4634 0.623403 14.8313 0.623403C14.1991 0.623403 13.5731 0.747956 12.9891 0.989948C12.405 1.23194 11.8744 1.58663 11.4275 2.03375L10.5 2.96125L9.5725 2.03375C8.66977 1.13102 7.4454 0.623871 6.16875 0.623871C4.8921 0.623871 3.66773 1.13102 2.765 2.03375C1.86227 2.93648 1.35512 4.16085 1.35512 5.4375C1.35512 6.71415 1.86227 7.93852 2.765 8.84125L3.6925 9.76875L10.5 16.5762L17.3075 9.76875L18.235 8.84125C18.6821 8.39434 19.0368 7.86371 19.2788 7.27969C19.5208 6.69566 19.6453 6.06968 19.6453 5.4375C19.6453 4.80532 19.5208 4.17934 19.2788 3.59531C19.0368 3.01129 18.6821 2.48066 18.235 2.03375V2.03375Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
            <Box component="div" className={classes.textContainer}>
              <Box component="div" className={classes.reviewCon}>
                <Box component="div" className={classes.stars}>
                  <Box
                    className={classes.starImage}
                    component="img"
                    src={starActive}
                    alt=""
                    sx={(theme) => ({
                      width: "auto",
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
                      width: "auto",
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
                      width: "auto",
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
                      width: "auto",
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
                      width: "auto",
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
              <Typography
                component="h6"
                className={classes.headingProduct}
                sx={{ fontSize: fontSize, lineHeight: lineHeight }}
              >
                {item.head}
              </Typography>
              <Typography component="p" className={classes.productText}>
                {item.description}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.priceText}
              >
                <Typography component="p" className={classes.priceline}>
                  {item.price}
                </Typography>
                <Typography component="p" className={classes.price}>
                  {item.price2}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default Collectioncard;
