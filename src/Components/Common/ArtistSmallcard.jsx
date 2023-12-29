import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import sale from "../../Assests/images/sale_img.png";
import starActive from "../../Assests/images/Star-active.png";
import starAsh from "../../Assests/images/Star-ash.png";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      padding: "0 15px",
      ".WishListC": {
        display: "none",
      },
      "&:hover .WishListC": {
        display: "flex",
      },
    },
    imgContainer: {
      position: "relative",
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
      padding: "5px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#BD3D3D",
        "svg path": {
          stroke: "#fff",
        },
      },
      [theme.breakpoints.down("iph")]: {
        svg: {
          width: "8px",
          height: "8px",
        },
        padding: "2px",
        margin: "5px",
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
      margin: "2px 0px",
    },
    stars: {
      padding: " 0px 4px 0px 0px",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    review: {
      display: "flex",
    },
    reviewCon: {
      fontFamily: "League Spartan, sans-serif",
      display: "flex",
      alignItems: "center",
      margin: "7px 0px 6px 0px",
      [theme.breakpoints.down("mobile")]: {
        flexWrap: "wrap",
      },
    },
    reviewText: {
      color: "#858A8C",
      fontWeight: "400",
      fontSize: "9px",
      lineHeight: "1",
      [theme.breakpoints.down("small")]: {
        fontSize: "8px",
      },
    },
    reviewNum: {
      fontSize: "9px",
      lineHeight: "1",
      color: "#2E3233",
      fontWeight: "600",
      [theme.breakpoints.down("small")]: {
        fontSize: "8px",
      },
    },
    headingProduct: {
      fontFamily: "league spartan, sans-serif",
      fontSize: "10px",
      lineHeight: "12px",
      color: "#2F2F2D",
      fontWeight: "500",
    },
    starImage: {
      width: "8px",
      height: "8px",
      marginLeft: "1px",
      "&:first-child": {
        marginLeft: "0px",
      },
    },
    productText: {
      fontFamily: "Nunito, sans-serif",
      fontSize: "6px",
      lineHeight: "12px",
      letterSpacing: "0em",
      color: "#858A8C",
      fontWeight: "400",
      marginTop: "1px",
    },
    priceText: {
      marginTop: "2px",
      fontFamily: "League Spartan, sans-serif",
      fontWeight: "400",
    },
    priceline: {
      color: "#787877",
      textDecoration: " line-through",
      fontSize: "8px",
      lineHeight: "10px",
    },
    price: {
      fontFamily: "League Spartan, sans-serif",
      color: "#2F2F2D",
      fontSize: "8px",
      lineHeight: "10px",
      marginLeft: "5px",
    },
  };
});

function ArtistSmallcard(props) {
  const { classes } = useStyles();
  return (
    <>
      {props.cardData.map((item, index) => (
        <Box key={index}>
          <Box disableGutters className={classes.cont}>
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
              <Box
                className={classes.saleC}
                component="img"
                src={sale}
                alt=""
                sx={(theme) => ({
                  width: "40px",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  [theme.breakpoints.down("iph")]: {
                    width: "25px",
                  },
                })}
              />

              <Box component="div" className={`${classes.WishListC} WishListC`}>
                <svg
                  width="12"
                  height="12"
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
              <Typography component="h6" className={classes.headingProduct}>
                {item.head}
              </Typography>
              <Typography component="p" className={classes.productText}>
                {item.description}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
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
        </Box>
      ))}
    </>
  );
}

export default ArtistSmallcard;
