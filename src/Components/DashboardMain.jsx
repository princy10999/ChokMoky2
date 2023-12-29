import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Grid, Paper, Typography, Stack } from "@mui/material";
import heart from "../Assests/images/heart.svg";
import logIn from "../Assests/images/log-in.svg";
import shoppingBag from "../Assests/images/shopping-bag.svg";
import EnhancedTable from './Common/CommonTable';
import CommonTable from "./Common/CommonTable";
import ShoppingCartTable from "./ShoppingCartTable";

const useStyles = makeStyles()((theme) => {
  return {
    profileBox: {
      width: "100%",
      marginLeft: "16px",
      marginBottom: "60px",
      [theme.breakpoints.down("laptop")]: {
        marginLeft: "0px",
      },
    },
    profileHead: {
      fontFamily: "League Spartan",
      fontSize: "25px",
      lineHeight: "23px",
      fontWeight: "500",
      marginTop: "30px",
      marginBottom: "30px",
    },
    dashboardText: {
      fontFamily: "League Spartan",
      fontSize: "20px",
      lineHeight: "18.4px",
      fontWeight: "500",
      letterSpacing: "2%",
      marginBottom: "7px",
    },
    dashboardPera: {
      fontFamily: "League Spartan",
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "400",
      letterSpacing: "3%",
      marginBottom: "20px",
      color: "#818183",
    },
    profileGrid: {
      borderBottom: "9px solid #F4F4F4",
      paddingBottom: "40px",
    },
    paperBox: {
      padding: "16px 16px 14px 16px",
      [theme.breakpoints.down("tab")]: {
        padding: "12px 11px 14px 11px",
      },
    },
    titleText: {
      fontFamily: "League Spartan",
      fontSize: "20px",
      lineHeight: "29px",
      fontWeight: "500",
      letterSpacing: "2%",
      color: "#61616A",
      [theme.breakpoints.down("tab")]: {
        fontSize: "16px",
      },
    },
    numText: {
      fontFamily: "League Spartan",
      fontSize: "24px",
      lineHeight: "29px",
      fontWeight: "500",
      letterSpacing: "3%",
      color: "#35364F",
      [theme.breakpoints.down("tab")]: {
        fontSize: "20px",
      },
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
    },
    head2: {
      fontFamily: "League Spartan",
      fontSize: "23px",
      lineHeight: "21.16px",
      fontWeight: "500",
      letterSpacing: "3%",
      color: "#363739",
      marginTop: "42px",
      marginBottom:"12px",
    },
  };
});
const overview = [
  {
    img: shoppingBag,
    title: "Total Purchase",
    num: "10",
  },
  {
    img: heart,
    title: "my wishlist",
    num: "40",
  },
  {
    img: logIn,
    title: "Last Login",
    num: "18/12/2022",
  },
];

const DashboardMain = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Dashboard</Typography>
      <Typography variant="h5" className={classes.dashboardText}>
        Hi, Sulata
      </Typography>
      <Typography variant="body1" className={classes.dashboardPera}>
        Lorem ipsum dolor sit amet the consectetur it adipiscing the eiusmod
        tempor incididunt the caption laibore lorem ipsum dolor aaamet caption
        consectetur lorem ipsum dolor sit amet consectetur the adipiscing
        caption.
      </Typography>
      <Grid
        container
        spacing={{ xSmall: 2 }}
        columns={{ xSmall: 4, xTab: 12 }}
      >
        {overview.map((item, index) => (
          <Grid item xSmall={4} xTab={4}>
            <Paper variant="outlined" square className={classes.paperBox}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={{ xSmall: 3, xTab: 0.8, mobile: 1 }}
                className={classes.imgBox}
              >
                <Box
                  className={classes.cardImage}
                  component="img"
                  src={item?.img}
                  alt=""
                  sx={(theme) => ({
                    width: "45px",
                    height: "auto",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    [theme.breakpoints.down("tab")]: {
                      width: "43px",
                    },
                    [theme.breakpoints.down("stab")]: {
                      width: "42px",
                    },
                  })}
                />
                <Box className={classes.textBox}>
                  <Typography variant="p" className={classes.titleText}>
                    {item?.title}
                  </Typography>
                  <Typography variant="p" className={classes.numText}>
                    {item?.num}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography className={classes.head2}>Recent Order</Typography>
      <Box sx={{ width: "100%" }}>
        <ShoppingCartTable />
      </Box>
    </Box>
  );
};

export default DashboardMain;
