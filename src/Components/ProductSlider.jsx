import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productImage from "../Assests/images/new2.png";
import ring2 from "../Assests/images/ring2.png";
import ring3 from "../Assests/images/ring3.png";
import { makeStyles } from "tss-react/mui";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import { SwipeRightAltOutlined } from "@mui/icons-material";

const useStyles = makeStyles()((theme) => {
  return {
    swiper:{
      padding:"12px 0",
      height: "100%",
      ".swiper-button-next":{
        top:"98%",
        left: "45%",
        transform: "rotate(90deg)",
        color:"#FFFFFF",
        backgroundColor:"rgba(54, 55, 57, 0.44)",
        "&::after": {
          fontSize:"21px",
        },
      },
      ".swiper-button-prev":{
        top:"2%",
        left: "45%",
        transform: "rotate(90deg)",
        color:"#FFFFFF",
        backgroundColor:"rgba(54, 55, 57, 0.44)",
        "&::after": {
          fontSize:"21px",
        },
      },
      width: "120px",
      [theme.breakpoints.down("mobile")]: {
        width: "90px",
      },
    },
    sliderBox:{
      height:"64vh",
      [theme.breakpoints.down("laptop")]: {
        height: "60vh",
      },
      [theme.breakpoints.down("tab")]: {
        height: "52vh",
      },
      [theme.breakpoints.down("mobile")]: {
        height: "41vh",
      },
    },
    sideImg:{
        width:"100%",
        height: "100%",
    },
  };
});
export default function App() {
  const { classes } = useStyles();

  return (
    <>
      <Box width="auto" className={classes?.sliderBox}>
        <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          navigation={true}
          className={classes?.swiper}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Box
              className={classes.sideImg}
              component="img"
              src={productImage}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              className={classes.sideImg}
              component="img"
              src={ring2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Box
              className={classes.sideImg}
              component="img"
              src={ring3}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
