import React, { useEffect } from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import catRing from "../../Assests/images/search_ring.png";
import catBan from "../../Assests/images/catBan.png";
import Heading from "../../Components/Common/Heading";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import tabback from "../../Assests/images/tab.png";
import actab from "../../Assests/images/active_tab.png";
import filter from "../../Assests/images/filter.png";
import SelectSection from "../../Components/SelectSection";
import Collectioncard from "../../Components/Common/Collectioncard";
import LoadButton from "../../Components/Common/LoadButton";

const useStyles = makeStyles()((theme) => {
  return {
    category: {
      // marginTop: "110px",
    },
    catBox: {
      width: "100%",
      height: "300px",
      position: "relative",
      backgroundPosition: "center",
      backgroundImage: `url(${catBan})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overFlow: "hidden",
      marginBottom: "45px",
      [theme.breakpoints.down("laptop")]: {
        height: "236px",
      },
      [theme.breakpoints.down("tab")]: {
        height: "186px",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("mobile")]: {
        height: "152px",
      },
      [theme.breakpoints.down("iph")]: {
        marginBottom: "15px",
      },
      [theme.breakpoints.down("small")]: {
        height: "142px",
      },
    },
    bnrRing: {
      position: "absolute",
      height: "264px",
      top: "36px",
      left: "40%",
      transform: "translateX(-50%)",
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
      [theme.breakpoints.down("laptop")]: {
        height: "200px",
      },
      [theme.breakpoints.down("tab")]: {
        height: "150px",
      },
      [theme.breakpoints.down("mobile")]: {
        height: "130px",
        top: "20px",
        left: "38%",
      },
      [theme.breakpoints.down("small")]: {
        height: "120px",
        left: "32%",
      },
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
    tabCont: {
      marginTop: "40px",
      [theme.breakpoints.down("tab")]: {
        marginTop: "20px",
      },
      [theme.breakpoints.down("mobile")]: {
        marginTop: "10px",
      },
      [theme.breakpoints.down("iph")]: {
        marginTop: "0px",
      },
    },
    tabs: {
      backgroundImage: `url(${tabback})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      width: "70%",
      margin: "0 auto",
      "& .MuiTabs-indicator": {
        backgroundColor: "transparent",
      },
      "& .MuiTab-root": {
        backgroundImage: `url(${actab})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 100%",
        backgroundPosition: "center",
        transition: "all 0.3s ease-in-out",
        width: "33.33%",
      },
      "& .MuiTab-root.Mui-selected": {
        backgroundImage: `url(${actab})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        color: "#FFF",
        transition: "all 0.3s ease-in-out",
      },
      [theme.breakpoints.down("tab")]: {
        width: "95%",
      },
      [theme.breakpoints.down("mobile")]: {
        minHeight: "30px",
      },
      [theme.breakpoints.down("iph")]: {
        minHeight: "15px",
      },
      [theme.breakpoints.down("small")]: {
        width: "100%",
      },
    },
    tab: {
      width: "272px",
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "27px",
      lineHeight: "25px",
      textAlign: "center",
      letterSpacing: "0.02em",
      color: "#35364F",
      textTransform: "none",
      "&:hover": {
        color: "#BD3D3D",
      },
      [theme.breakpoints.down("smallLaptop")]: {
        fontSize: "25px",
        lineHeight: "24px",
      },
      [theme.breakpoints.down("tab")]: {
        fontSize: "20px",
        lineHeight: "22px",
      },
      [theme.breakpoints.down("mobile")]: {
        minHeight: "30px",
        fontSize: "18px",
        padding: "10px",
      },
      [theme.breakpoints.down("iph")]: {
        minHeight: "15px",
        fontSize: "15px",
        padding: "6px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "14px",
      },
    },
    filter: {
      display: "flex",
      justifyContent: "flex-start",
      marginTop: "32px",
      marginBottom: "29px",
      [theme.breakpoints.down("mobile")]: {
        marginTop: "12px",
        marginBottom: "10px",
      },
    },
    filterimg: {
      width: "24px",
      height: "24px",
      marginRight: "14px",
      cursor: "pointer",
      [theme.breakpoints.down("laptop")]: {
        width: "20px",
        height: "20px",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "15px",
        height: "15px",
        marginRight: "10px",
      },
      [theme.breakpoints.down("iph")]: {
        width: "12px",
        height: "12px",
        marginRight: "7px",
      },
    },
    filterP: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "26px",
      lineHeight: "24px",
      letterSpacing: "0.01em",
      color: "#BD3D3D",
      [theme.breakpoints.down("laptop")]: {
        fontSize: "24px",
      },
      [theme.breakpoints.down("mobile")]: {
        fontSize: "18px",
        lineHeight: "18px",
      },
      [theme.breakpoints.down("iph")]: {
        fontSize: "15px",
        lineHeight: "15px",
      },
    },
    loadbutcont: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "50px",
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
  {
    image: require("../../Assests/images/new2.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new3.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new4.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new5.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new7.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new8.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new7.png"),
    head: "Silver Diamond Waves Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹410.00",
    price2: " ₹300.00",
  },
  {
    image: require("../../Assests/images/new8.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
  {
    image: require("../../Assests/images/new6.png"),
    head: "Oxidised Silver Heart Ring",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed",
    price: " ₹210.00 ",
    price2: "₹180.00",
  },
];
const tablist = ["Women Ring", "Baby Ring", "Men Ring"];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="tab-content">{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CategorySearch() {
  const { classes } = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Chokmoki - Rings";
  }, []);
  return (
    <Box component="div" disableGutters className={classes.category}>
      <Box component="div" disableGutters className={classes.catBox}>
        <Box component="img" src={catRing} alt="" className={classes.bnrRing} />
      </Box>
      <Heading
        title="Rings"
        bgText="R"
        fontFamily="Playfair Display, serif"
        size="56px"
        tabsize="50px"
        iphsize="35px"
        h="140px"
      />
      <Box component="div" className={classes.tabCont}>
        <Container disableGutters className={classes.cont}>
          <Box component="div" className={classes.tablist}>
            <Box
              sx={{ borderBottom: 1, borderColor: "divider" }}
              component="div"
              className={classes.tablistCont}
            >
              <Tabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                {tablist.map((item, index) => {
                  return (
                    <Tab
                      label={item}
                      {...a11yProps(index)}
                      key={index}
                      disableRipple
                      className={classes.tab}
                    />
                  );
                })}
              </Tabs>
            </Box>
            <Box component="div" className={classes.filter}>
              <Box
                component="img"
                src={filter}
                alt=""
                className={classes.filterimg}
                onClick={() => handleOpen()}
              />
              <Typography variant="p" className={classes.filterP}>
                Filter all Products
              </Typography>
            </Box>
            {open && <SelectSection m="0px" b="none" />}
            {tablist.map((item, index) => {
              return (
                <TabPanel value={value} index={index}>
                  <Grid
                    container
                    columnSpacing={{
                      xSmall: 2,
                      laptop: 5,
                      smallLaptop: 8,
                      desktop: 8,
                    }}
                    columns={{ xSmall: 4, mobile: 12, laptop: 12 }}
                    className={classes.mainGrid}
                  >
                    <Collectioncard
                      cardData={ArrivalCard}
                      fontSize="25px"
                      lineHeight="23px"
                    />
                  </Grid>
                </TabPanel>
              );
            })}
            <Box component="div" className={classes.loadbutcont}>
              <LoadButton />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default CategorySearch;
