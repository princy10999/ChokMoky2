import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import ArtistSmallcard from "./Common/ArtistSmallcard";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles()((theme) => {
  return {
    artistcardCont: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #DCDCDC",
      paddingBottom: "26px",
      paddingTop: "38px",
      [theme.breakpoints.down("laptop")]: {
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
    cardcontleft: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "57%",
      [theme.breakpoints.down("desktop")]: {
        width: "50%",
      },
      [theme.breakpoints.down("laptop")]: {
        width: "100%",
      },
      [theme.breakpoints.down("iph")]: {
        flexDirection: "column",
      },
    },
    textcont: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      [theme.breakpoints.down("iph")]: {
        alignItems: "center",
      },
    },
    cardcontright: {
      width: "40%",
      [theme.breakpoints.down("desktop")]: {
        width: "46%",
      },
      [theme.breakpoints.down("laptop")]: {
        width: "70%",
        marginTop: "20px",
      },
      [theme.breakpoints.down("tab")]: {
        width: "80%",
      },
      [theme.breakpoints.down("iph")]: {
        width: "100%",
      },
    },
    pimage: {
      marginRight: "32px",
      width: "192px",
      maxWidth: "100%",
      maxHeight: "100%",
      height: "auto",
      [theme.breakpoints.down("tab")]: {
        marginRight: "25px",
        width: "165px",
      },
      [theme.breakpoints.down("mobile")]: {
        marginRight: "20px",
        width: "125px",
      },
      [theme.breakpoints.down("iph")]: {
        marginRight: "0px",
      },
    },
    paper: {
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: "15px 0",
      border: "1px solid rgba(189,61,61,0.2)",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
      cursor: "pointer",
    },
    title: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "25px",
      lineHeight: "23px",
      letterSpacing: "0.03em",
      color: "#35364F",
      [theme.breakpoints.down("tab")]: {
        fontSize: "22px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "20px",
        lineHeight: "22px",
      },
      [theme.breakpoints.down("iph")]: {
        marginTop: "15px",
      },
    },
    desc: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "23px",
      letterSpacing: "0.03em",
      color: "#818183",
      marginTop: "12px",
      [theme.breakpoints.down("tab")]: {
        lineHeight: "20px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "15px",
        lineHeight: "18px",
        marginTop: "10px",
      },
    },
  };
});

function ArtistCard(props) {
  const { classes } = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box component="div" className={classes.artistcardCont} data-aos="fade-up">
      <Box component="div" className={classes.cardcontleft}>
        <Box
          component="img"
          src={props.Pimage}
          alt=""
          className={classes.pimage}
        />
        <Box component="div" className={classes.textcont}>
          <Typography variant="h2" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="p" className={classes.desc}>
            {props.desc}
          </Typography>
        </Box>
      </Box>
      <Box component="div" className={classes.cardcontright} onClick={() => props.handleExplore()}>
        <Paper
          variant="outlined"
          square
          elevation={1}
          className={classes.paper}
          
        >
          {Array.apply(null, { length: 3 }).map((e, i) => (
            <ArtistSmallcard cardData={props.cardData} key={i} />
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

export default ArtistCard;
