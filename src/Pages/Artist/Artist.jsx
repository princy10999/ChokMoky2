import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Container } from "@mui/material";
import Heading from "../../Components/Common/Heading";
import ArtistCard from "../../Components/ArtistCard";
import cardImage from "../../Assests/images/cardImage.png";
import LoadButton from "../../Components/Common/LoadButton";
import artistLeaf from "../../Assests/images/artist-leaf.png";
import ArtistPopup from "../../Components/ArtistPopup";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles()((theme) => {
  return {
    artist: {
      marginTop: "110px",
    },
    leaf: {
      position: "absolute",
      top: "504px",
      right: "0px",
      width: "243px",
      height: "277px",
      zIndex: -1,
      animation: "blow 10s infinite ease-in-out",
      "@keyframes blow":{
        "0%":{
            transform: "rotate(0deg)",
            transformOrigin: "bottom left",
        },
        "25%":{
            transform: "rotate(-3deg)",
            transformOrigin: "bottom left",
        },
        "50%":{
          transform: "rotate(-6deg)",
          transformOrigin: "bottom left",
        },
        "75%":{
            transform: "rotate(-3deg)",
            transformOrigin: "bottom left",
        },
        "100%":{
            transform: "rotate(0deg)",
            transformOrigin: "bottom left",
        }
      }
    },
    cont: {
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      maxWidth: "1200px",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    cardCont: {
      marginTop: "17px",
    },
    loadbutcont: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "37px",
      marginBottom: "72px",
      [theme.breakpoints.down("mobile")]: {
        marginBottom: "20px",
        marginTop: "20px",
      },
    },
  };
});

const ArrivalCard = [
  {
    image: require("../../Assests/images/new1.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
];

function Artist() {
  const { classes } = useStyles();
  const [explore, SetExplore] = useState(false);
  const handleExplore = () => {
    SetExplore(!explore);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Artist Collection - Chokmoki";
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Box component="div" disableGutters className={classes.artist}>
        <Box component="img" src={artistLeaf} alt="" className={classes.leaf} />
        <Container className={classes.cont}>
          <Heading
            title="Discover Artist"
            bgText="D"
            fontFamily="Playfair Display, serif"
            subTitle="Through original imagery and editorial perspectives, we bring you unique point new views."
            size="52px"
            tabsize="57px"
            iphsize="35px"
            h="120px"
            tabh="105px"
            iphh="84px"
            lapbott="20px"
            iphbott="71px"
          />
          <Box component="div" className={classes.cardCont}>
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <ArtistCard
                key={i}
                Pimage={cardImage}
                title="Swapna Chatterjee"
                desc="Sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                cardData={ArrivalCard}
                handleExplore={handleExplore}
              />
            ))}
          </Box>
          <Box component="div" className={classes.loadbutcont} data-aos="fade-up">
            <LoadButton/>
          </Box>
        </Container>
      </Box>
      {explore && <ArtistPopup handleExplore={handleExplore} />}
    </>
  );
}

export default Artist;
