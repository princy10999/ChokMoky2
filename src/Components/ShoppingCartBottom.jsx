import React from "react";
import coupon from "../Assests/images/coupons 1.png";
import girl from "../Assests/images/girl.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    Img: {
      height: "8vh",
    },
    Abcd: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("mobile")]: {
        display: "block",
      },
    },
  };
});

const ShoppingCartBottom = () => {
  const { classes, cx } = useStyles();
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xSmall={12} small={12} mobile={12} laptop={8} desktop={7}>
          <ButtonGroup
            sx={{
              border: "1px solid #CACACA",
              //   paddingX: "10px",
              height: "58px",
            }}
          >
            <TextField
              sx={{ border: "none" }}
              id="input-with-icon-textfield"
              placeholder="Coupon Code"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Box
                      component="img"
                      src={coupon}
                      alt=""
                      sx={{ width: "2vh" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <IconButton
              sx={{
                fontSize: "18px",
                color: "#35364F",
                borderLeft: "1px solid #CACACA",
                borderRadius: "0px",
              }}
            >
              Apply code
            </IconButton>
          </ButtonGroup>
          <Typography
            variant="h5"
            sx={{
              color: "#35364F",
              fontSize: "25px",
              fontFamily: "League Spartan",
              marginY: "20px",
            }}
          >
            You may be interested in…
          </Typography>
          <Box
            className={classes.Abcd}
            sx={{
              border: "1px solid rgba(214, 214, 214, 0.4)",
              padding: "10px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Box component="img" src={girl} alt="" className={classes.Img} />
              <Box sx={{ paddingLeft: "20px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2F2F2D",
                    lineHeight: "23px",
                    fontSize: "22px",
                    fontFamily: "League Spartan",
                  }}
                >
                  Silver Diamond Waves Ring
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#818183",
                    lineHeight: "23px",
                    fontSize: "16px",
                    fontFamily: "League Spartan",
                  }}
                >
                  (Current Size 2.4 Anna Fits well from 2.2 to 2.6 Anna)
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#2F2F2D",
                    lineHeight: "23px",
                    fontSize: "18px",
                    fontFamily: "League Spartan",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#787877",
                      textDecoration: "line-through",
                      fontWeight: "lighter",
                      paddingRight: "10px",
                    }}
                  >
                    {" "}
                    ₹410.00
                  </Typography>{" "}
                  ₹300.00
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                border: "1px solid #141524",
                color: "#141524",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xSmall={12}
          small={12}
          mobile={12}
          laptop={4}
          desktop={4}
          sx={{ marginLeft: "auto" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1A1B2F",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              Subtotal:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#4E4E56",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              ₹1800
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1A1B2F",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              Coupon Discount:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#4E4E56",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              ₹100
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1A1B2F",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              Shipping:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#4E4E56",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              ₹98
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: "8px",
              borderTop: "1px solid rgba(214, 214, 214, 0.4)",
              borderBottom: "1px solid rgba(214, 214, 214, 0.4)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#1A1B2F",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              Total:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#1A1B2F",
                fontSize: "20px",
                fontFamily: "League Spartan",
              }}
            >
              ₹1998
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              border: "1px solid #141524",
              color: "white",
              backgroundColor: "#141524",
              paddingX: "20px",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <span></span>
            <span></span>
            Proceed to checkout
          </Button>
          <Typography
            variant="h5"
            sx={{
              color: "#141524",
              fontSize: "20px",
              fontFamily: "League Spartan",
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            Continue Shopping <ArrowForwardIcon sx={{ color: "#3D3D47" }} />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCartBottom;
