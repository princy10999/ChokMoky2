import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Box from "@mui/material/Box";
import logo from "../Assests/images/top-logo.png";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    icon: {
      position: "fixed",
      top:"5px",
      left: "14px",
      zIndex: "999999",
      transition: "top 0.3s",
    },
  };
});

function HeaderIcon() {
  const { classes } = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 110) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <Box
      component="div"
      className={classes.icon}
      style={isVisible ? { opacity: "100",height:"75px",overflow:"hidden" } : { opacity: "0" }}
    >
      <Box
        component="img"
        disableGutters
        src={logo}
        alt="Website logo"
        sx={(theme) => ({
          width: "6rem",
          position: "relative",
         
          [theme.breakpoints.down("small")]: {
            width: "6rem",
          },
        })}
      />
    </Box>
  );
}

export default HeaderIcon;
