import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import new4 from "../Assests/images/new4.png";
import new8 from "../Assests/images/new8.png";
import plus from "../Assests/images/plus.png";
import Heading from "./Common/Heading";

const useStyles = makeStyles()((theme) => {
  return {
    Compatible: {
      margin: "50px 20px 80px 20px",
      [theme.breakpoints.down("smallLaptop")]: {
        margin: "50px 10px 80px 10px",
      },
    },
    leftImg: {
      [theme.breakpoints.down("tab")]: {
        width: "220.28px",
        height: "230.59px",
      },
      [theme.breakpoints.down("stab")]: {
        width: "205px",
        height: "210px",
      },
      [theme.breakpoints.down("xTab")]: {
        width: "180px",
        height: "190px",
      },
      [theme.breakpoints.down("iph")]: {
        width: "140px",
        height: "150px",
      },
      [theme.breakpoints.down("small")]: {
        width: "130px",
        height: "140px",
      },
    },
    rightImg: {
      [theme.breakpoints.down("tab")]: {
        width: "220.28px",
        height: "230.59px",
      },
      [theme.breakpoints.down("stab")]: {
        width: "205px",
        height: "210px",
      },
      [theme.breakpoints.down("xTab")]: {
        width: "180px",
        height: "190px",
      },
      [theme.breakpoints.down("iph")]: {
        width: "140px",
        height: "150px",
      },
      [theme.breakpoints.down("small")]: {
        width: "130px",
        height: "140px",
      },
    },
    pluseImg: {
      [theme.breakpoints.down("tab")]: {
        width: "49px",
        height: "49px",
      },
      [theme.breakpoints.down("iph")]: {
        width: "46px",
        height: "46px",
      },
      [theme.breakpoints.down("small")]: {
        width: "30px",
        height: "30px",
        marginLeft: "0px",
      },
    },

    collectionBox: {
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("stab")]: {
        flexWrap: "wrap",
      },
    },

    buttonBox: {
      marginLeft: "30px",
      [theme.breakpoints.down("laptop")]: {
        marginLeft: "10px",
      },
      [theme.breakpoints.down("stab")]: {
        marginTop: "30px",
        marginLeft: "0px",
      },
    },
    cBtn: {
      borderRadius: "0px",
      fontFamily: "League Spartan",
      fontSize: "22px",
      fontWeight: "500",
      lineHeight: "20.24px",
      padding: " 12px 24px",
      [theme.breakpoints.down("iph")]: {
        padding: " 9px 21px",
        fontSize: "18px",
      },
    },
    addBtn: {
      color: "#FFFFFF",
      backgroundColor: "#BD3D3D",
    },
  };
});

const CompatibleProduct = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.Compatible}>
      <Heading
        title="Compatible with"
        subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
        bgText="c"
        fontFamily="League Spartan, serif"
        h="130px"
        tabh="105px"
        iphh="90px"
        mobilebott="60px"
        iphbott="78px"
      />
      <Box className={classes.collectionBox}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xSmall: 0, iph: 0.8, xTab: 2 }}
          className={classes.imgBox}
        >
          <Box
            className={`${classes.comImage} ${classes.leftImg}`}
            component="img"
            src={new4}
            alt=""
            sx={(theme) => ({
              width: "232.28px",
              height: "257.59px",
              maxWidth: "100%",
              maxHeight: "100%",
            })}
          />
          <Box
            className={`${classes.comImage} ${classes.pluseImg}`}
            component="img"
            src={plus}
            alt=""
            sx={(theme) => ({
              width: "51px",
              height: "51px",
              maxWidth: "100%",
              maxHeight: "100%",
            })}
          />
          <Box
            className={`${classes.comImage} ${classes.rightImg}`}
            component="img"
            src={new8}
            alt=""
            sx={(theme) => ({
              width: "232.28px",
              height: "257.59px",
              maxWidth: "100%",
              maxHeight: "100%",
            })}
          />
        </Stack>
        <Stack
          direction={{ xSmall: "row", stab: "column" }}
          alignItems="center"
          spacing={2}
          className={classes.buttonBox}
        >
          <Button
            variant="outlined"
            className={`${classes.addBtn} ${classes.cBtn}`}
          >
            ADD
          </Button>
          <Button
            variant="outlined"
            className={`${classes.skipBtn} ${classes.cBtn}`}
          >
            Skip
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CompatibleProduct;
