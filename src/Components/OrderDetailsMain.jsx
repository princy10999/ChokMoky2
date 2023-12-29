import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Grid, Stack, Typography } from "@mui/material";
import imge1 from "../Assests/images/order_img.png";
import imge2 from "../Assests/images/order_img2.png";

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
      marginBottom: "25px",
    },
    boxImg: {
      border: "1px solid #F4F4F4",
      padding: "12px 10px 12px 13px",
    },
    oderBox: {
      border: "1px solid #F4F4F4",
      padding: "20px 120px 0px 24px ",
      marginBottom: "20px",
      [theme.breakpoints.down("laptop")]: {
        padding: "20px 80px 0px 20px ",
      },
      [theme.breakpoints.down("tab")]: {
        padding: "20px 20px 0px 20px ",
      },

    },
    head2: {
      fontFamily: "League Spartan",
      fontSize: "21px",
      lineHeight: "19.32px",
      fontWeight: "500",
      color: "#505152",
      marginBottom: "12px",
    },
    stackBox2: {
      marginBottom: "21px",
    },
    label1: {
      fontFamily: "League Spartan",
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: "400",
      color: "#3D3D47",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("tab")]: {
        fontSize: "16px",
      },
    },
    label2: {
      fontFamily: "League Spartan",
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: "500",
      color: "#1A1C1D",
      [theme.breakpoints.down("tab")]: {
        fontSize: "16px",
      },
    },
    textBox: {
      display: "flex",
      flexDirection: "column",
    },
    titleText: {
      fontFamily: "League Spartan",
      fontSize: "21px",
      lineHeight: "19.32px",
      fontWeight: "400",
      marginTop: "2px",
      color: "#2F2F2D",
      [theme.breakpoints.down("tab")]: {
        fontSize: "18px",
      },
    },
    numText: {
      fontFamily: "League Spartan",
      fontSize: "19px",
      lineHeight: "17.48px",
      fontWeight: "400",
      marginTop: "11px",
      color: "#3D3D47",
      [theme.breakpoints.down("tab")]: {
        fontSize: "17px",
      },
    },
    gridBox1: {
      marginBottom: "20px",
    },
    numText2: {
      fontFamily: "League Spartan",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
      marginTop: "6px",
      color: "#717475",
      [theme.breakpoints.down("tab")]: {
        fontSize: "14px",
      },
    },
    labelH: {
      fontFamily: "League Spartan",
      fontSize: "21px",
      lineHeight: "24px",
      fontWeight: "500",
      marginTop: "6px",
      marginBottom: "12px",
      color: "#505152",
    },
    orderL: {
      border: "1px solid #F2F2F2",
      padding: "14px",
    },
  };
});

const OrderDetailsMain = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.profileBox}>
      <Typography className={classes.profileHead}>Order Details</Typography>
      <Typography className={classes.head2}>Order Information</Typography>
      <Box className={classes.oderBox}>
        <Stack
          direction={{ mobile: "row", xSmall: "column" }}
          justifyContent="space-between"
          spacing={{ xSmall: 3, xTab: 0.8, mobile: 1 }}
          className={classes.stackBox}
        >
          <Box className={classes.oderLeftBox}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>Order Id :</Typography>
              <Typography className={classes.label2}>#AB8792268</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>No. of Item :</Typography>
              <Typography className={classes.label2}>3</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>Order date :</Typography>
              <Typography className={classes.label2}>30/07/2022</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>
                Payment method :
              </Typography>
              <Typography className={classes.label2}>Online</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1.3 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>Status :</Typography>
              <Typography className={classes.label2}>Deliverd</Typography>
            </Stack>
          </Box>
          <Box className={classes.oderRightBox}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>
                Order subtotal :
              </Typography>
              <Typography className={classes.label2}> ₹1020.00</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>
                Shipping Amount :
              </Typography>
              <Typography className={classes.label2}> ₹89.00</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>
                Total payable amount:
              </Typography>
              <Typography className={classes.label2}>₹100.00</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              sx={{ mb: 1 }}
              spacing={{ xSmall: 1, mobile: 1 }}
            >
              <Typography className={classes.label1}>Order date :</Typography>
              <Typography className={classes.label2}>₹1209.00</Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Grid container spacing={2} columns={{ xSmall: 4, stab: 12 }} className={classes.gridBox1}>
        <Grid item stab={6} xSmall={4}>
          <Box className={classes.boxImg}>
            <Stack
              direction="row"
              spacing={{ xSmall: 1.8 }}
              className={classes.stackBoxImg}
            >
              <Box
                className={classes.cardImage}
                component="img"
                src={imge1}
                alt="fff"
                sx={(theme) => ({
                  width: "73px",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                })}
              />
              <Box className={classes.textBox}>
                <Typography variant="p" className={classes.titleText}>
                  Silver Diamond Waves Ring
                </Typography>
                <Typography variant="p" className={classes.numText}>
                  ₹300
                </Typography>
                <Typography variant="p" className={classes.numText2}>
                  ₹2
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item stab={6} xSmall={4}>
          <Box className={classes.boxImg}>
            <Stack
              direction="row"
              spacing={{ xSmall: 1.9 }}
              className={classes.stackBoxImg}
            >
              <Box
                className={classes.cardImage}
                component="img"
                src={imge2}
                alt="fff"
                sx={(theme) => ({
                  width: "73px",
                  height: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                })}
              />
              <Box className={classes.textBox}>
                <Typography variant="p" className={classes.titleText}>
                  Silver Diamond Waves Ring
                </Typography>
                <Typography variant="p" className={classes.numText}>
                  ₹300
                </Typography>
                <Typography variant="p" className={classes.numText2}>
                  ₹3
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} columns={{ xSmall: 4, stab: 12 }} >
        <Grid item stab={6} xSmall={4}>
          <Box>
            <Typography className={classes.labelH}>
              Billing Information:
            </Typography>
            <Box className={classes.orderL}>
              <Stack
                direction="row"

                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Name :</Typography>
                <Typography className={classes.label2}> Avishek Das</Typography>
              </Stack>
              <Stack
                direction="row"

                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>
                  Email Address :
                </Typography>
                <Typography className={classes.label2}>
                  {" "}
                  test-emil12@gmail.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Phone No.</Typography>
                <Typography className={classes.label2}>
                  +91 9876543210
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Address :</Typography>
                <Typography className={classes.label2}>
                  Abc station road, Kolkata,  <br></br> West Bengal, 700088
                </Typography>
              </Stack>
            </Box>
          </Box>

        </Grid>
        <Grid item stab={6} xSmall={4}>

          <Box>
            <Typography className={classes.labelH}>
              Shipping Information:
            </Typography>
            <Box className={classes.orderL}>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Name :</Typography>
                <Typography className={classes.label2}> Avishek Das</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>
                  Email Address :
                </Typography>
                <Typography className={classes.label2}>
                  {" "}
                  test-emil12@gmail.com
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Phone No.</Typography>
                <Typography className={classes.label2}>
                  +91 9876543210
                </Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{ mb: 1 }}
                spacing={{ xSmall: 1, mobile: 1 }}
              >
                <Typography className={classes.label1}>Address :</Typography>
                <Typography className={classes.label2}>
                  Abc station road, Kolkata,  <br></br> West Bengal, 700088
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default OrderDetailsMain;
