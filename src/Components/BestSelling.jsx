import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import Heading from "./Common/Heading";
import { makeStyles } from "tss-react/mui";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import Swiper4 from "./Common/Swiper4";

const useStyles = makeStyles()((theme) => {
  return {
    cont: {
      padding: "66px 0 44px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    main: {
      background: " rgba(251, 238, 231, 0.3)",
      position:"relative"
    },
    colImgimg1:{
      position:"absolute",
      width:"250px",
      left:"8%",
      top:"-22%",
      [theme.breakpoints.down("laptop")]: {
        display: 'none'
       },
    },
    colImgimg2:{
      width:"250px",
      position:"absolute",
      right:"8%",
      top:"-20.5%",
      [theme.breakpoints.down("laptop")]: {
        display: 'none'
       },
    }
  };
});

const BestSelling = () => {
  const { classes } = useStyles();

  const CollItem = [
    {
      image: require("../Assests/images/collect1.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect2.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect3.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect4.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect1.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect2.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect3.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
    {
      image: require("../Assests/images/collect4.png"),
      line: require("../Assests/images/line.png"),
      text: "Round Stone Earrings",
      price: "12,000",
      paid_price: "10,000",
    },
  ];
  return (
    <Box className={classes.main}>
    <Box
                  component="img"
                  className={classes.colImgimg1}
                  src={"https://bijoux.vamtam.com/wp-content/uploads/2020/11/j3371po033200-3-2.png"}
                  alt=""
                />
                <Box
                  component="img"
                  className={classes.colImgimg2}
                  src={"https://bijoux.vamtam.com/wp-content/uploads/2020/11/j3371po033200-2-1.png"}
                  alt=""
                />
      <Container className={classes.cont}>
        <Heading
          title="Best Selling"
          subTitle="Through original imagery and editorial perspectives, we bring you unique point."
          bgText="B"
          fontFamily="League Spartan, serif"
          h="130px"
          tabh="105px"
          iphh="90px"
          tabbott="50px"
        />
        <Swiper4 data={CollItem} />
      </Container>
    </Box>
  );
};

export default BestSelling;
