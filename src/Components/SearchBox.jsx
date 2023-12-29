import React, { useEffect, useRef } from "react";
import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { AiFillCloseSquare } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { gsap } from "gsap";

const useStyles = makeStyles()((theme) => {
  return {
    searchOverlay: {
      width: "100%",
      height: "75vh",
      marginTop:"111px",
      background: "white",
      position: "absolute",
      top: "0",
      left: "0",
      transition: "all .2s",
      zIndex: "-1",
      [theme.breakpoints.down("mobile")]: {
        height:"70vh"
      },
    },
    form: {
      padding: "0px",
      margin: "auto",
      width: "40%",
      display: "flex",
      position: "relative",
      top: "40%",
      [theme.breakpoints.down("laptop")]: {
        width: "50%",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "65%",
      },
      [theme.breakpoints.down("small")]: {
        width: "80%",
      },
    },
    input: {
      width: "100%",
      padding: "15px 20px",
      background: "#fff",
      border: "1px solid gray !important",
      borderRadius: "0px !important",
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      [`& input`]: {
        padding: "0px !important",
      },
      "&:hover": {
        border: "none !important",
      },
      "&::before": {
        border: "none !important",
      },
      "&::after": {
        border: "none !important",
      },
    },
    buttSpan: {
      position: "relative",
      zIndex: "2",
    },
    buttton: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "none",
      padding: "10px 20px",
      color: "#FFFFFF",
      cursor: "pointer",
      border: "none",
      height: "100%",
      borderRadius: "0px",
      boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
      },
    },
    cross: {
      position: "absolute",
      bottom: "2em",
      left: "3em",
      fontSize: "2em",
      [theme.breakpoints.down("mobile")]: {
        left: "2.5em",
      },
      [theme.breakpoints.down("small")]: {
        left: "1.6em",
      },
    },
  };
});
function SearchBox({ openSearch }) {
  const { classes } = useStyles();
  const searchRef = useRef(null);
  useEffect(() => {
    gsap.from(searchRef.current, {
      duration: 2.5,
      ease: "slow(0.7, 0.7, false)",
      y: -100,
    });
  }, []);
  return (
    <Box
      component="div"
      disableGutters
      className={classes.searchOverlay}
      ref={searchRef}
    >
      <Box component="form" disableGutters className={classes.form}>
        <Input
          type="Search"
          placeholder="Search..."
          className={classes.input}
          //   InputProps={{
          //     endAdornment: (
          //       <IconButton>
          //         <SearchOutlined />
          //       </IconButton>
          //     ),
          //   }}
        />
        <Box
          component="div"
          disableGutters
          sx={{
            position: "relative",
            height: "54px",
            border: "0.90px solid #BD3D3D",
          }}
        >
          <Button
            type="Submit"
            disableElevation
            disableRipple
            variant="contained"
            className={classes.buttton}
          >
            <SearchOutlined />
            {/* <Box component="span" disableGutters className={classes.buttSpan}>
            Search
          </Box> */}
          </Button>
          <IconButton
            disableRipple
            disableGutters
            className={classes.cross}
            onClick={openSearch}
          >
            <AiFillCloseSquare sx={{ fontSize: "5em" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SearchBox;
