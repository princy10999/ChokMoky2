import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import wishList from "../../Assests/images/heart.svg";
import starActive from "../../Assests/images/Star-active.png";
import starAsh from "../../Assests/images/Star-ash.png";
import { BsSuitHeart } from "react-icons/bs";
import Collectioncard from "./Collectioncard";

const useStyles = makeStyles()((theme) => {
  return {
    cardLayout: {
      margin: "5.2rem 11rem 1rem 11rem",
      padding: "0rem  1rem",
      [theme.breakpoints.down("desktop")]: {
        margin: "3.2rem auto 1rem auto",
      },
      [theme.breakpoints.down("laptop")]: {
        margin: "3.2rem auto 1rem auto",
      },
      [theme.breakpoints.down("mobile")]: {
        margin: "1rem 0rem"
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
      padding: "10px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#BD3D3D",
        "svg path": {
          stroke: "#fff"
        }
      },
    },
    textContainer: {
      margin: "0.6rem 0rem 2rem 0rem",
      [theme.breakpoints.down("mobile")]: {
        margin: "0.2rem 0rem"
      },
    },
    stars: {
      padding: " 0px 7px 0px 0px",
    },
    review: {
      display: "flex",
    },
    reviewCon: {
      fontFamily: "League Spartan, sans-serif",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("mobile")]: {
        flexWrap: "wrap",
      },
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
    headingProduct: {
      fontFamily: "league spartan, sans-serif",
      fontSize: "19px",
      lineHeight:1,
      color: "#2F2F2D",
      fontWeight: "400",
      marginTop: "10px",
      [theme.breakpoints.down("desktop")]: {
        fontSize: "22px",
        lineHeight: "25px",
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
    },
    productText: {
      fontFamily: "League Spartan, sans-serif",
      fontSize: "17px",
      color: "#858A8C",
      fontWeight: "400",
      marginTop: "10px",
      [theme.breakpoints.down("desktop")]: {
        lineHeight: "18px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
        marginTop: "0px"
      },
    },
    priceText: {
      marginTop: "10px",
      fontFamily: "League Spartan, sans-serif",

      fontWeight: "400",
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
        marginTop: "0px"
      },
    },
    priceline: {
      color: "#787877",
      textDecoration: " line-through",
      fontSize: "17px",
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
      [theme.breakpoints.down("tab")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "13px",
      },
    },
  };
});
const ArrivalCard = [
  {
    image: require("../../Assests/images/new1.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new2.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new3.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new4.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new5.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new7.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new8.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
];

const NewArrivalCard = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.cardLayout}>
      <Grid
        container
        spacing={{ xSmall: 2, laptop: 3 }}
        columns={{ xSmall: 4, mobile: 12, laptop: 16 }}
      >
          <Collectioncard cardData={ArrivalCard} fontSize="25px" lineHeight="23px"/>
      </Grid>
    </Box>
  );
};

export default NewArrivalCard;
