import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { RxCross2 } from "react-icons/rx";
import Heading from "./Common/Heading";
import Collectioncard from "./Common/Collectioncard";

const useStyles = makeStyles()((theme) => {
  return {
    Overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      background: "rgba(0,0,0,0.6)",
      zIndex: 99999,
      width: "100%",
      height: "100%",
      overflowY: "auto",
      "-webkit-animation":
        "anvil 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards",
      "@keyframes anvil": {
        "0%": {
          transform: "scale(1) translateY(0px)",
          opacity: 0,
          boxShadow: "0 0 0 rgba(241, 241, 241, 0)",
        },
        "1%": {
          transform: "scale(0.96) translateY(10px)",
          opacity: 0,
          boxShadow: "0 0 0 rgba(241, 241, 241, 0)",
        },
        "100%": {
          transform: "scale(1) translateY(0px)",
          opacity: 1,
          boxShadow: "0 0 500px rgba(241, 241, 241, 0)",
        },
      },
    },
    popup: {
      position: "relative",
    },
    paper: {
      position: "absolute",
      top: "210px",
      left: "200px",
      right: "200px",
      width: "calc(100% - 400px)",
      height: "1177px",
      backgroundColor: "#FFFFFF",
      border: "4px solid #BD3D3D",
      [theme.breakpoints.down("desktop")]: {
        top: "184px",
        left: "100px",
        right: "100px",
        width: "calc(100% - 200px)",
      },
      [theme.breakpoints.down("laptop")]: {
        left: "30px",
        right: "30px",
        width: "calc(100% - 60px)",
      },
      [theme.breakpoints.down("mobile")]: {
        top: "147px",
        left: "10px",
        right: "10px",
        width: "calc(100% - 20px)",
      },
    },
    cont: {
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    cross: {
      float: "right",
      margin: "10px",
      cursor: "pointer",
    },
    popCont: {
      padding: "47px 15px 40px",
    },
    mainGrid: {
      marginTop: "40px",
      padding: "0px 56px",
      height: "909px",
      overflowY: "auto",
      [theme.breakpoints.down("desktop")]: {
        padding: "0px 30px",
      },
      "&::-webkit-scrollbar": {
        width: "6px",
        borderRadius: "9px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#F2F2F2",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#35364F",
        borderRadius: "9px",
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

function ArtistPopup(props) {
  const { classes } = useStyles();
  return (
    <Box component="div" disableGutters className={classes.Overlay}>
      <Box component="div" className={classes.popup}>
        <Container className={classes.cont}>
          <Paper variant="outlined" square className={classes.paper}>
            <RxCross2
              size={20}
              className={classes.cross}
              onClick={() => props.handleExplore()}
            />
            <Box component="div" className={classes.popCont}>
              <Heading
                title="Explore Collection"
                bgText="E"
                fontFamily="Playfair Display, serif"
                subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
                size="42px"
                tabsize="40px"
                iphsize="25px"
                h="120px"
                tabh="104px"
                mobilebott="75px"
                iphh="84px"
                lapbott="56px"
                iphbott="71px"
              />
              <Grid
                container
                columnSpacing={{
                  xSmall: 2,
                  laptop: 5,
                  smallLaptop: 5,
                  desktop: 5,
                }}
                columns={{ iph: 4, mobile: 8, tab: 12, laptop: 12 }}
                className={classes.mainGrid}
              >
                <Collectioncard
                  cardData={ArrivalCard}
                  fontSize="23px"
                  lineHeight="21px"
                />
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
}

export default ArtistPopup;
