import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

import { makeStyles } from "tss-react/mui";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper";
import { Link } from "react-router-dom";

const useStyles = makeStyles()((theme) => {
  return {
    item: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      height: "100%",
      paddingBottom: "18px",
    },
    collbox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    collImg: {
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transition: "all 0.5s ease-in-out",
      // [theme.breakpoints.down("mobile")]: {
      //   width: "auto",
      // height: "150px",
      // },
    },
    colImgimg: {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      transition: "all 0.5s ease-in-out",
      "&:hover": {
        transform: 'scale(1.2)',
      },
    },

    text: {
      fontFamily: "Playfair Display",
      color: "#494A5A",
      fontSize: "23px",
      fontWeight: 400,
      textAlign: "center",
      marginTop: "10px",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "14px",
      },
    },
    price: {
      fontFamily: "nunito",
      color: "#9D9B9B",
      fontSize: "16px",
      lineHeight:"21.82px",
      fontWeight: 400,
      textAlign: "center",
      marginRight: 5,
      textDecorationLine: "line-through",
      [theme.breakpoints.down("tab")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "12px",
      },
    },
    paid_price: {
      fontFamily: "nunito",
      color: "#BD3D3D",
      lineHeight:"27.28px",
      fontSize: "20px",
      fontWeight: 600,
      textAlign: "center",
      [theme.breakpoints.down("tab")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "14px",
      },
    },
    colImgimg2: {
      zIndex: "9999",
      position: "absolute",
      bottom: "69px",
    },
    swiper: {
      padding: 30,
      paddingTop: "54px",
      ".swiper-button-next": {
        top: "45%",
        right: 0,
        color: "#BD3D3D",
      },
      ".swiper-button-prev": {
        top: "45%",
        left: 0,
        color: "#BD3D3D",
      },
      [theme.breakpoints.down("mobile")]: {
        padding: 10,
        paddingTop: "54px",
        ".swiper-button-next": {
          top: "40%",
        },
        ".swiper-button-prev": {
          top: "40%",
        },
      },
    },
    colbut: {
      marginTop: "20px",
    },
  };
});

const Swiper4 = ({ data }) => {
  const { classes, cx } = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Swiper
      breakpoints={{
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter:true,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className={classes?.swiper}
    >
      {data.map((item, index) => (
        <SwiperSlide>
          <Box component="div" className={cx(classes.item)} key={index}>
            <Box component={Link} to="#" className={classes.collbox}>
              <Box component="div" className={classes.collImg}>
                <Box
                  component="img"
                  className={classes.colImgimg}
                  src={item.image}
                  alt=""
                />
                <Box
                  component="img"
                  className={classes.colImgimg2}
                  src={item.line}
                  alt=""
                />
              </Box>
              <Box className={classes.colbut}>
                <Typography className={classes.text}>{item?.text}</Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography className={classes.price}>
                    {item?.price}
                  </Typography>
                  <Typography className={classes.paid_price}>
                    {item?.paid_price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swiper4;
