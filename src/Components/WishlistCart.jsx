import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Stack,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Collectioncard from "../Components/Common/Collectioncard";
import * as Yup from "yup";
import profile from "../Assests/images/images 6.png";
import { SimpleInput } from "../Components/Common/SimpleInput";

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
  };
});
const ArrivalCard = [
  {
    image: require("../Assests/images/wishlist1.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/wishlist2.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/wishlist3.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/wishlist4.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../Assests/images/wishlist3.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../Assests/images/wishlist5.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
];
const WishlistCart = () => {
    const { classes } = useStyles();
  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Edit Profile</Typography>
      <Grid
          container
          spacing={{ xSmall: 2, laptop: 3 }}
          columns={{ xSmall: 4, xTab:12, mobile: 12, laptop: 12 }}
        >
          <Collectioncard
            cardData={ArrivalCard}
            fontSize="21px"
            lineHeight="19.32px"
          />
        </Grid>
    </Box>
  );
};

export default WishlistCart;
