import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import banImg from "../Assests/images/banner-img.png";
import girl from "../Assests/images/girl.png";
import ring from "../Assests/images/bnr-ring.png";
import banarow from "../Assests/images/dwn-pointer.png";
import logoAnimation from "../Assests/images/logoAnimation.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SVGComponent from "./Common/SVGComponent";

const useStyles = makeStyles()((theme) => {
  return {
    banner: {
      // marginTop: "110px",
      position: "relative",
      width: "100%",
      display: "block",
      // [theme.breakpoints.down("iph")]: {
      //   marginTop: "87px",
      // },
    },
    bannerBox: {
      width: "100%",
      height: "calc( 100vh - 110px)",
      position: "relative",
      backgroundPosition: "center",
      backgroundImage: `url(${banImg})`,
      backgroundRepeat: "norepeat",
      backgroundSize: "cover",
      overflow: "hidden",
      [theme.breakpoints.down("desktop")]: {
        height: "calc( 100vh - 303px)",
      },
      [theme.breakpoints.down("tab")]: {
        backgroundPosition: "right",
        height: "70vh",
      },
      [theme.breakpoints.down("mobile")]: {
        backgroundPosition: "right",
        height: "50vh",
      },
      [theme.breakpoints.down("iph")]: {
        backgroundPosition: "right",
        height: "40vh",
      },
    },
    bnrImg: {
      width: "100%",
      height: "100%",
      display: "block",
      position: "absolute",
      objectFit: "cover",
    },
    girl: {
      width: "calc(100vw - 65%)",
      height: "100%",
      position: "absolute",
      bottom: "0px",
      left: "-38px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      overflow: "hidden",
      [theme.breakpoints.down("laptop")]: {
        width: "0",
      },
    },

    girlImg: {
      height: "calc( 100vh - 110px)",
      [theme.breakpoints.down("desktop")]: {
        height: "calc( 100vh - 303px)",
      },
    },
    nwArr: {
      position: "absolute",
      bottom: "0px",
      right: "0px",
      fontFamily: "Playfair Display",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "138px",
      lineHeight: "76px",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.19)",
      [theme.breakpoints.down("desktop")]: {
        fontSize: "120px",
      },
      [theme.breakpoints.down("laptop")]: {
        fontSize: "100px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "85px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "45px",
      },
    },
    bannerText: {
      margin: "0px auto",
      padding: "45px 0px 45px",
      width: "604px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      [theme.breakpoints.down("tab")]: {
        width: "auto",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "auto",
      },
    },
    bannerTexth6: {
      fontFamily: "Playfair Display",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "30px",
      lineHeight: "40px",
      textAlign: "center",
      letterSpacing: "0.01em",
      color: "#FFFFFF",
      marginBottom: "5px",
    },
    bannerTexth1: {
      fontFamily: "Playfair Display",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "75px",
      lineHeight: "88px",
      textAlign: "center",
      letterSpacing: "0.02em",
      textTransform: "capitalize",
      color: "#FFFFFF",
      marginBottom: "35px",
      [theme.breakpoints.down("tab")]: {
        fontSize: "60px",
        lineHeight: "60px",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "40px",
        lineHeight: "40px",
        marginBottom: "20px",
      },
    },

    bnrRing: {
      position: "absolute",
      width: "240px",
      height: "382px",
      right: "70px",
      bottom: "78px",
      display: "block",
      animation: "bnrring 8s infinite ease-in-out",
      "@keyframes bnrring": {
        "0%": {
          transform: "translateY(0px) scale(0.9)",
        },
        "25%": {
          transform: "translateY(5px) scale(0.95)",
        },
        "50%": {
          transform: "translateY(0px) scale(1)",
        },
        "75%": {
          transform: "translateY(-5px) scale(0.95)",
        },
        "100%": {
          transform: "translateY(0px) scale(0.9)",
        },
      },

      [theme.breakpoints.down("desktop")]: {
        width: "250px",
        height: "330px",
        right: "40px",
        bottom: "100px",
        zIndex: "99",
      },
      [theme.breakpoints.down("tab")]: {
        width: "200px",
        height: "220px",
        right: "40px",
        bottom: "40px",
        zIndex: "99",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "100px",
        height: "120px",
        right: "20px",
        bottom: "20px",
        zIndex: "99",
      },
    },
    bnrDwnArw: {
      position: "absolute",
      borderRadius: "60px",
      width: "83px",
      height: "93px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bottom: "-39px",
      left: "calc(50% - 43.5px)",
      zIndex: "5",
      overflow: "hidden",
      "&::before": {
        position: "absolute",
        bottom: "0px",
        width: "100%",
        left: "0px",
        right: "0px",
        height: "39px",
        background: "#ECC6B4",
        content: '""',
        zIndex: "-1",
      },
    },
    arrowimg: {
      width: "18px",
      marginBottom:"20px",
      height: "40.33px",
      display: "block",
      animation: "mover 1s infinite  alternate",
      position: "relative",
      "@keyframes mover": {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-10px)" },
      },
      "&::before": {
        position: "absolute",
        content: '""',
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        width: "14px",
        background: "#BD3D3D",
        animation: "filler 2s infinite alternate",
        zIndex: "5",
        padding: "7px",
        "@keyframes filler": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
    },
    swiper: {
      ".swiper-button-next": {
        top: "50%",
        right: 50,
      },
      ".swiper-button-prev": {
        top: "50%",
        left: 11,
      },
      // [theme.breakpoints.down("mobile")]: {
      //   ".swiper-button-next": {
      //     top: "50%",
      //     right: 0,
      //   },
      //   ".swiper-button-prev": {
      //     top: "50%",
      //     left: 0,
      //   },
      // },
    },
    bannButto: {
      padding: "18px 20px 15px 17px",
      margin: "0 auto",
      backgroundColor: "#FFF",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "0",
      width: "204px",
      height: "51px",
      color: "#1A1B2F",
      position: "relative",
      overflow: "hidden",
      zIndex: "2",
      "&:hover": {
        // backgroundColor: "#FFF",
        // transform: "translateY(-3px)",
        backgroundColor: " #bd3d3d !important",
        color: " #fff",
      },
      [`& span`]: {
        boxSizing: "border-box",
        display: "block",
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
        "&:first-child": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)",
        },
        "&:nth-child(2)": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)",
        },
        "&:nth-child(3)": {
          "-webkit-transform": "rotate(180deg)",
          transform: "rotate(180deg)",
        },
        "&:nth-child(4)": {
          "-webkit-transform": "rotate(0deg)",
          transform: "rotate(0deg)",
        },
        "&::before": {
          "-webkit-animation": "animate 4s linear infinite",
          animation: "animate 4s linear infinite",
          background: "#1a1b2f",
          content: '""',
          height: "2px",
          position: "absolute",
          width: "100%",
        },
        "@keyframes animate": {
          "0%": {
            "-webkit-transform": "scaleX(0)",
            transform: "scaleX(0)",
            "-webkit-transform-origin": "left",
            transformOrigin: "left",
          },
          "50%": {
            "-webkit-transform": "scaleX(1)",
            transform: "scaleX(1)",
            "-webkit-transform-origin": "left",
            transformOrigin: "left",
          },
          "50.1%": {
            "-webkit-transform": "scaleX(1)",
            transform: "scaleX(1)",
            "-webkit-transform-origin": "right",
            transformOrigin: "right",
          },
          to: {
            "-webkit-transform": "scaleX(0)",
            transform: "scaleX(0)",
            "-webkit-transform-origin": "right",
            transformOrigin: "right",
          },
        },
      },

      "&::before": {
        background: "#1a1b2f65",
        content: '""',
        opacity: 0,
        position: "absolute",
        top: "-50px",
        "-webkit-transform": "rotate(35deg)",
        transform: "rotate(35deg)",
        // transition: "all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        transition: "all 3s cubic-bezier(0.19, 1, 0.22, 1)",
        height: "155px",
        width: "50px",
        left: "-50%",
        // width: "0%",
        // height: "100%",
        // background: "#BD3D3D",
        // top: "0",
        // left: "0",
        // zIndex: "-1",
      },
      "&::after": {
        background: "#1a1b2f65",
        content: '""',
        opacity: 0,
        position: "absolute",
        top: "-50px",
        "-webkit-transform": "rotate(35deg)",
        transform: "rotate(35deg)",
        transition: "all 3s cubic-bezier(0.19, 1, 0.22, 1)",
        height: "20rem",
        width: "8rem",
        left: "-100%",
      },
      "&:hover::before": {
        // width: "100%",
        left: "120%",
        opacity: "0.5",
      },
      "&:hover::after": {
        left: "200%",
        opacity: "0.6",
      },
      "&:hover .css-etok4z-buttStrong": {
        color: "#FFF",
      },
      "&:hover .css-1yxt9y0-banbutspan": {
        backgroundColor: "#FFF !important",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "auto",
        minWidth: "150px",
        height: "40px",
      },
    },
    buttStrong: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "18px",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "#141524",
      transition: "all 0.9s",
      [theme.breakpoints.down("mobile")]: {
        fontSize: "14px",
      },
    },
    banbutspan: {
      display: "block !important",
      marginRight: "10px !important",
      width: "30px !important",
      height: "2px !important",
      transition: "all 0.9s",
      backgroundColor: "#141524 !important",
      position: "relative !important",
      zIndex:4,
      "&::before":{
        display: "none !important"
      }
,    },
  };
});
// const SliderConfigs = {
//   containerClass: "swiper-container banSlider",
//   parallax: true,
//   centeredSlides: true,
//   speed: 500,
//   spaceBetween: 0,
//   effect: "slide",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// };

function BannerPArt({ handleClick }) {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  const { classes } = useStyles();
  return (
    <Box component="div" disableGutters className={classes.banner}>
      <Swiper
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className={classes?.swiper}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {Array.apply(null, { length: 5 }).map((e, i) => (
          <SwiperSlide>
            <Box component="div" key={i} className={classes.banSlider}>
              <Box
                component="div"
                disableGutters
                className={classes.bannerBox}
                data-swiper-parallax={parallaxAmount}
                data-swiper-parallax-opacity={parallaxOpacity}
              >
                <Box component="div" className={classes.bannerText}>
                  <Typography variant="h6" className={classes.bannerTexth6}>
                    Now up to{" "}
                    <Box
                      component="span"
                      sx={{ color: "#BD3D3D", fontFamily: "playfair display" }}
                    >
                      70%
                    </Box>{" "}
                    off*
                  </Typography>
                  <Typography variant="h1" className={classes.bannerTexth1}>
                    Flower Diamond collection
                  </Typography>
                  <Button
                    component={Link}
                    to="#"
                    className={classes.bannButto}
                    contained
                  >
                    <Box component="span" className={classes.banbutspan}></Box>
                    <Box component="strong" className={classes.buttStrong}>
                      Explore Now
                    </Box>
                    <span></span>
                    <span></span>
                    <span></span>
                  </Button>
                </Box>
                <Box component="div" className={classes.girl}>
                  <Box
                    component="img"
                    src={girl}
                    alt=""
                    className={classes.girlImg}
                  />
                </Box>
                <Typography variant="h4" className={classes.nwArr}>
                  New Arrival
                </Typography>

                <Box
                  component="img"
                  src={ring}
                  alt=""
                  className={classes.bnrRing}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        component={Link}
        to="#"
        className={classes.bnrDwnArw}
        onClick={handleClick}
      >
        <Box
          component="img"
          src={banarow}
          alt=""
          className={classes.arrowimg}
        />
      </Box>
    </Box>
  );
}

export default BannerPArt;
