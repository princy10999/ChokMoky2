import { Container,Box } from "@mui/material";
import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { makeStyles } from "tss-react/mui";
import Heading from "../../Components/Common/Heading";
import faqLine from "../../Assests/images/faqLine.png";
import artistLeaf from "../../Assests/images/artist-leaf.png";
import LoadButton from "../../Components/Common/LoadButton";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles()((theme) => {
  return {
    faq: {
      marginTop: "111px",
      [theme.breakpoints.down("mobile")]: {
        marginTop: "70px",
      }
    },
    leaf: {
      position: "absolute",
      top: "905px",
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
    jwlhead: {
      marginTop: "105px",
      position: "relative",
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "57px",
      letterSpacing: "0.01em",
      color: "#35364F",
      [theme.breakpoints.down("tab")]: {
        marginTop:"0px"
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize:"30px",
        lineHeight:"55px"
      },
      [theme.breakpoints.down("iph")]: {
        fontSize:"26px",
        lineHeight:"45px"
      }
    },
    jwlimg: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "93px",
      [theme.breakpoints.down("mobile")]: {
        width:"72px"
      },
      [theme.breakpoints.down("iph")]: {
        width:"65px"
      }
    },
    faqdes: {
      marginTop: "32px",
      [theme.breakpoints.down("mobile")]: {
        marginTop:"22px",
      },
      [theme.breakpoints.down("iph")]: {
        marginTop:"15px"
      },
    },
    accor: {
      borderRadius: 0,
      borderBottom:"1px solid #EAEAEA",
      boxShadow: "none",
      "&::before": {
        content: "none",
      },
    },
    qs:{
      fontFamily: 'League Spartan',
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "21px",
      lineHeight: "30px",
      letterSpacing: "0.03em",
      color: "#35364F",
      [theme.breakpoints.down("mobile")]: {
        fontSize: "18px",
      lineHeight: "24px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize:"16px",
        lineHeight:"24px"
      }
    },
    ans:{
      fontFamily: 'League Spartan',
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "17px",
      lineHeight: "26px",  
      letterSpacing: "0.05em",
      color: "#858A8C",
      [theme.breakpoints.down("mobile")]: {
        fontSize: "16px",
      lineHeight: "22px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize:"15px",
        lineHeight:"20px"
      }
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

const Jdata = [
  {
    qus: "How should I care for my jewelry?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "Can I bring my old jewelry pieces to you for re-design?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "Where and how are they made?",
    ans: "GStore your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
];

const Pdata = [
  {
    qus: "What are your payment methods?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "I need to update my shipping address!",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "What are your shipping fees?",
    ans: "GStore your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "How long will it take for me to get my order?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "Will I pay for any customs duties and taxes?",
    ans: "GStore your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
];
const Rdata = [
  {
    qus: "What is your return & exchange policy?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
  {
    qus: "Order issues?",
    ans: "Store your jewelry individually and avoid exposing them to liquid and cosmetics. Extreme heat and humidity might cause gold plated jewelry to tarnish, keep your pieces in a dark, cool and dry place to avoid this. Our best advice would be: wear your pair often (this helps lessen oxidation), and keep them in your Penny Pairs pouch when not in use.",
  },
];
const Faq = () => {
  const { classes } = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Chokmoki | FAQ";
    Aos.init({ duration: 2000 });
  }, []);
  const CustomExpandIcon = () => {
    return (
      <Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none",
          },
          ".expandIconWrapper": {
            display: "none",
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block",
          },
        }}
      >
        <div className="expandIconWrapper">
          <RemoveIcon />
        </div>
        <div className="collapsIconWrapper">
          <AddIcon />
        </div>
      </Box>
    );
  };
  const FaqBody = (props) => {
    return (
      <Box
        component="div"
        sx={(theme) => ({
          marginTop: props.marginTop,
          [theme.breakpoints.down("mobile")]: {
            marginTop: props.mobilem,
          }
        })}
        data-aos="fade-up"
      >
        <Box component="div" className={classes.jwl}>
          <Box component="div" className={classes.jwlhead}>
            {props?.title}
            <Box
              component="img"
              src={faqLine}
              alt=""
              className={classes.jwlimg}
            />
          </Box>
          <Box component="div" className={classes.faqdes}>
            {props.data?.map((e, i) => {
              return (
                <Accordion key={i} className={classes.accor}>
                  <AccordionSummary
                    sx={{ padding: "0px" }}
                    expandIcon={<CustomExpandIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.qs}>{e?.qus}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{paddingLeft:"0px"}}>
                    <Typography className={classes.ans}>{e?.ans}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box component="div" className={classes.faq}>
      <Box component="img" src={artistLeaf} alt="" className={classes.leaf} />
      <Container className={classes.cont}>
        <Heading
          title="Frequently asked questions"
          bgText="F"
          fontFamily="Playfair Display, serif"
          subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
          size="52px"
          tabsize="36px"
          iphsize="28px"
          h="120px"
          tabh="105px"
          iphh="84px"
          tabbott="67px"
          lapbott="67px"
          iphbott="60px"
          smallbott="74px"
          smallsize="24px"
        />
        <FaqBody title="Our Jewelry" data={Jdata} marginTop="98px" mobilem="60px"/>
        <FaqBody title="Payment & Shipping" data={Pdata} marginTop="45px" mobilem="50px"/>
        <FaqBody title="Returns & Exchanges" data={Rdata} marginTop="45px" mobilem="50px"/>
        <Box component="div" className={classes.loadbutcont} data-aos="fade-up">
          <LoadButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
