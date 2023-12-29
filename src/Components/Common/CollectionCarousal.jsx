import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "tss-react/mui";
import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import StyledButton1 from "./StyledButton1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
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
    },
    collImg: {
      width: "100%",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      transition: "all 0.5s ease-in-out",
      // '.collImg > img' :{
      //     position: 'absolute',
      //     top: 'calc(50% - 100px)',
      //     left: 'calc(50% - 100px)'
      //   },
      '> img:last-of-type': {
        opacity: '1',
        transition: 'opacity 0.5s ease-in-out',
      },
      '&:hover > img:last-of-type': {
        opacity: '0'
      },
      // [theme.breakpoints.down("mobile")]: {
      //   height: "px",
      // },
    },
    colImgimg: {
      width: "240px",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      position: 'absolute',
      // top: 'calc(50% - 50%)',
      // left: 'calc(50% - 50%)',
      // [theme.breakpoints.down("mobile")]: {
      //   width: "95%",
      // },
    },
    colbut: {
      margin: "-25px 10px 0px 10px",
      // [theme.breakpoints.down("mobile")]: {
      //   width: "175px",
      // },
    },
    swiper: {
      padding: "127px 20px 0px",
      ".swiper-slide-next .collImg,.swiper-slide-next + .swiper-slide .collImg": {
        height: "335px !important"
      },
      ".swiper-slide-next .collImg img,.swiper-slide-next + .swiper-slide .collImg img": {
        margin: "0 10px !important"
      },
      [theme.breakpoints.down("smallLaptop")]: {
        ".swiper-slide-next + .swiper-slide .collImg": {
          height: "300px !important"
        }
      },
      [theme.breakpoints.down("tab")]: {
        ".swiper-slide-next .collImg": {
          height: "300px !important"
        },
      },
      ".swiper-wrapper": {
        alignItems: "baseline"
      },
      ".swiper-button-next": {
        right: 0,
        top: "60%",
        color: "#BD3D3D"
      },
      ".swiper-button-prev": {
        left: 0,
        top: "60%",
        color: "#BD3D3D"
      },
      [theme.breakpoints.down("mobile")]: {
        padding: "5px",
        ".swiper-button-next": {
          top: "40%"
        },
        ".swiper-button-prev": {
          top: "40%"
        },
      },
    },
    // .hover-switch > img {
    //   position: absolute;
    //   top: calc(50% - 100px);
    //   left: calc(50% - 100px);
    // }
    // /* 
    //  * Show the last image by default
    // */
    // .hover-switch > img:last-of-type {
    //   opacity: 1;
    //   transition: opacity 0.5s ease-in-out;
    //   -moz-transition: opacity 0.5s ease-in-out;
    //   -webkit-transition: opacity 0.5s ease-in-out;
    // }
    // /* 
    //  * Hide the last image on hover
    // */
    // .hover-switch:hover > img:last-of-type {
    //   opacity: 0;
    // }
  };
});

function CollectionCarousal() {
  const { classes, cx } = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const CollItem = [
    {
      image: require("../../Assests/images/collect1.png"),
      image2: require("../../Assests/images/collect4.png"),
      text: "Necklace",
    },
    {
      image: require("../../Assests/images/collect2.png"),
      image2: require("../../Assests/images/collect3.png"),
      text: "Earring",
    },
    {
      image: require("../../Assests/images/collect3.png"),
      image2: require("../../Assests/images/collect2.png"),
      text: "Bracelet",
    },
    {
      image: require("../../Assests/images/collect4.png"),
      image2: require("../../Assests/images/collect1.png"),
      text: "Ring",
    },
    {
      image: require("../../Assests/images/collect1.png"),
      image2: require("../../Assests/images/collect4.png"),
      text: "Necklace",
    },
    {
      image: require("../../Assests/images/collect2.png"),
      image2: require("../../Assests/images/collect3.png"),
      text: "Earring",
    },
    {
      image: require("../../Assests/images/collect3.png"),
      image2: require("../../Assests/images/collect2.png"),
      text: "Bracelet",
    },
    {
      image: require("../../Assests/images/collect4.png"),
      image2: require("../../Assests/images/collect1.png"),
      text: "Ring",
    },
  ];
  return (
    <Swiper
      breakpoints={{
        "@0.85": {
          slidesPerView: 2,
        },
        "@1.065": {
          slidesPerView: 3,
          spaceBetween: 50
        },
        "@1.50": {
          slidesPerView: 4,
        },
      }}
      slidesPerView={1}
      loop={true}
      speed={2000}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      navigation={true} modules={[Autoplay, Navigation]} className={`${classes?.swiper} swiper`}>
      {CollItem.map((item, index) => (
        <SwiperSlide>
          <Box component="div" className={classes.item} key={index}>
            <Box component={Link} to="#" className={classes.collbox}>
              <Box component="div" className={`${classes.collImg} collImg`}>
                <Box
                  component="img"
                  className={classes.colImgimg}
                  src={item.image}
                  alt=""
                />
                <Box
                  component="img"
                  className={classes.colImgimg}
                  src={item.image2}
                  alt=""
                />
              </Box>
              <Box component="div" className={classes.colbut}>
                <StyledButton1 text={item.text} link="#" />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CollectionCarousal;
