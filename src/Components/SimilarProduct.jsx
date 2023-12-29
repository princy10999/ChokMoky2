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
      // padding: "66px 0 22px",
      // height: "100%",
      // maxWidth: "1200px",
      // [theme.breakpoints.down("laptop")]: {
      //   maxWidth: "767px",
      // },
      // [theme.breakpoints.down("mobile")]: {
      //   maxWidth: "575px",
      // },
    },
    main: {
    //   background: " rgba(251, 238, 231, 0.3)",
    },
  };
});
const SimilarProduct = () => {
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
      <Container className={classes.cont}>
        <Heading
          title="You may also like"
          subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
          bgText="y"
          fontFamily="League Spartan, serif"
          h="130px"
          tabh="92px"
          iphh="81px"
          lapbott="66px"
          tabbott="67px"
        />
        <Swiper4 data={CollItem} />
      </Container>
    </Box>
  );
};

export default SimilarProduct;
