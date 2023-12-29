import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Grid, Typography, Pagination, PaginationItem } from "@mui/material";
import Collectioncard from "./Common/Collectioncard";

const useStyles = makeStyles()((theme) => {
  return {
    cardLayout: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "3rem 9rem 1rem 9rem",
      [theme.breakpoints.down("desktop")]: {
        margin: "3rem 7rem 1rem 7rem",
      },
      [theme.breakpoints.down("laptop")]: {
        padding: "0rem  3rem",
        margin: "3rem auto 1rem auto",
      },
      [theme.breakpoints.down("mobile")]: {

        margin: "2rem auto 1rem auto",
        padding: "0rem  1rem",
      },


    },
    root: {
      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root":{
        [theme.breakpoints.down("small")]: {
          fontSize: "0.6rem",
        },
      },
      "& .MuiPaginationItem-root:hover": {
        borderRadius: "0px !important",
      },

    },
    selected: {
      backgroundColor: 'transparent !important',
      color: '#1A1B2F',
      padding: "0px 4px",
      borderBottom: " 0.7px solid #1A1B2F",
      borderRadius: "0px !important",
      "&:hover": {
        borderRadius: "0px !important",
      },
      [theme.breakpoints.down("small")]: {
        fontSize: "0.6rem",
      },
    },
    headText2: {
      fontFamily: "League Spartan, sans-serif",
      fontSize: "24px",
      color: "#424358",
      width:"100%",
      display: "flex",
      
      fontWeight: "400",
      lineHeight: "22.08px",
      marginBottom: "2rem",
      [theme.breakpoints.down("smallLaptop")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("laptop")]: {
        fontSize: "18px",
        marginBottom: "0.9rem",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "16px",
      },
    },

  };
});
const ArrivalCard = [
  {
    image: require("../Assests/images/new1.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/new2.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new3.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/new4.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new5.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new7.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/new8.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new7.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/new8.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
];

const CollectionData = () => {
  const { classes } = useStyles();
  return (

    <Box className={classes.cardLayout}>
      <Typography component="p" className={classes.headText2}>
        301 Products found by Search
      </Typography>
      <Grid
        container
        columnSpacing={{ xSmall: 2, laptop: 5, smallLaptop: 8, desktop: 8 }}
        columns={{ xSmall: 4, mobile: 12, laptop: 12 }}
        className={classes.mainGrid}
      >
        <Collectioncard cardData={ArrivalCard} fontSize="25px" lineHeight="23px"/>
      </Grid>
      <Pagination
       boundaryCount={0}
        count={10}
        className={classes.root}
        renderItem={(item) => <PaginationItem {...item}
          classes={{ selected: classes.selected }} />}
      />

    </Box>

  );
};

export default CollectionData;
