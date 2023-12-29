import React, { useEffect, useState } from "react";
import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import logo from "../Assests/images/logo.png";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import SearchBox from "./SearchBox";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Select,
} from "@mui/material";
import { ContentCopy, ContentCut } from "@mui/icons-material";
import Dashbord from "../Assests/images/dashbord.svg";
import edit from "../Assests/images/edite_profile.svg";
import order from "../Assests/images/clock.svg";
import checkCircle from "../Assests/images/check-circle.svg";
import wishlist from "../Assests/images/hart.svg";
import lock from "../Assests/images/lock.svg";
import logOut from "../Assests/images/logout.svg";

const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      position: "relative",
      width: "100%",
      display: "block",
      backgroundColor: "#FFFFFF",
      transition: "top 0.3s",
    },
    headTop: {
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "32px",
      padding: "6px",
    },
    headTopP: {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "15px",
      lineHeight: "20px",
      textAlign: "center",
      letterSpacing: "0.03em",
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("iph")]: {
        fontSize: "13px",
      },
    },
    headtoplink: {
      color: "white",
      textDecoration: "underline",
      "&:hover": {
        color: "#f8ddcfcc",
        textDecoration: "underline",
      },
    },
    botHead: {
      width: "100%",
      height: "78px",
      position: "relative",
      borderBottom: "1px solid #E3E3E3",
      [theme.breakpoints.down("small")]: {
        height: "55px",
      },
    },
    cont: {
      paddingLeft: "15px",
      paddingRight: "15px",
      height: "100%",
      // margin: "0px 80px 0px 80px",
      maxWidth: "100%",
      maxWidth: "calc(100% - 80px)",
      [theme.breakpoints.down("laptop")]: {
        maxWidth: "767px",
        // margin: "0px 80px 0px 80px",
      },
      [theme.breakpoints.down("mobile")]: {
        maxWidth: "575px",
      },
    },
    navMain: {
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
      alignItems: "center",
    },
    navLeft: {
      display: "flex",
    },
    navImg: {
      width: "36px",
      height: "36px",
      "&:hover": {
        filter:
          "invert(38%) sepia(56%) saturate(938%) hue-rotate(327deg) brightness(110%) contrast(57%)",
      },
    },
    navImg1: {
      width: "30px",
      height: "30px",
      filter:
        "invert(38%) sepia(56%) saturate(938%) hue-rotate(327deg) brightness(110%) contrast(57%)",
    },
    navItem: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "&:hover .css-1857cx5-ItemTtl": {
        color: theme.palette.primary.main,
        transition: "0.3s",
        fontSize: "14px",
        lineHeight: "10px",
      },
      "&:hover .css-1n0vc87-count": {
        backgroundColor: "#BD3D3D",
      },
    },
    ItemTtl: {
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "0px",
      lineHeight: "0px",
      letterSpacing: "0.01em",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "0.3s",
      position: "absolute",
      top: "54px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "max-content",
    },
    navicon: {
      padding: "14px",
      position: "relative",
      [theme.breakpoints.down("small")]: {
        padding: "0",
      },
    },
    wlogo: {
      position: " absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: "-17px",
      width: "211px",
      height: "148px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: "0px",
      paddingBottom: "0px",
      "&::before": {
        position: " absolute",
        content: '""',
        top: "17px",
        height: "calc(100% - 17px)",
        width: "100%",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 54.17%, #FFFFFF 100%)",
        borderRadius: "0px 0px 100px 100px",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "155px",
        height: "115px",
      },
      [theme.breakpoints.down("small")]: {
        width: "150px",
        height: "96px",
      },
    },
    wlogo1: {
      position: " absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: "-11px",
      width: "211px",
      height: "148px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: "0px",
      paddingBottom: "0px",
      "&::before": {
        position: " absolute",
        content: '""',
        top: "11px",
        height: "calc(100% - 17px)",
        width: "100%",
        background: "#FFFFFF",
        boxShadow: "0px 4px 44px rgb(0 0 0 / 4%)",
        borderRadius: "0px 0px 100px 100px",
      },
      [theme.breakpoints.down("mobile")]: {
        width: "155px",
        height: "115px",
      },
      [theme.breakpoints.down("small")]: {
        width: "150px",
        height: "96px",
      },
    },
    count: {
      position: "absolute",
      width: "17px",
      height: "17px",
      borderRadius: "50%",
      backgroundColor: "#3D3836",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "league spartan",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "13px",
      lineHeight: "16px",
      color: "#FFFFFF",
      top: "17px",
      right: "15px",
    },
    drawList: {
      height: "40px",
      color: theme.palette.primary.main,
      fontFamily: "League Spartan",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "17px",
      lineHeight: "22px",
    },
  };
});


function Header() {
  const logout = () => {
    swal({
      title: "Warning",
      text: "Are you sure you want to logout?",
      icon: "warning",
    }).then((res) => {
      if (res) {
        localStorage.clear();
        navigate("/login");
      }
    });
  };
  const navConfig = [
    {
      title: "Dashboard",
      path: "/",
      icon: Dashbord,
    },
    {
      title: " Edit Profile ",
      path: "/edit-profile",
      icon: edit,
    },
    {
      title: "Order history",
      path: "/dashboard/reminder",
      icon: order,
    },
    {
      title: "Order Detail",
      path: "/dashboard/reminder",
      icon: checkCircle,
    },
    {
      title: "wishlist",
      path: "/dashboard/reminder",
      icon: wishlist,
    },
    {
      title: "Change password",
      path: "/dashboard/reminder",
      icon: lock,
    },
    {
      title: "Logout",
      icon: logOut,
      onClick: logout,
    },
  ];

  const getUserData = localStorage.getItem("userData");
  const userData = JSON.parse(getUserData);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const openDropDown = Boolean(anchorEl);
  
  const navigate = useNavigate();
 
  const { classes } = useStyles();
  const location = useLocation();
  const [isopen, setIsopen] = useState(false);
  const [hfix, setHfix] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHfix(true);
      } else if (window.scrollY === 0) {
        setHfix(false);
      }
    });
  }, []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const True = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openSearch = () => {
    setIsopen(!isopen);
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleMenuItemClick = (e, i) => {
    setOpen(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));
  const menuItemsLeft = [
    {
      image: require("../Assests/images/home-nav.png"),
      text: "Home",
      link: "/",
    },
    {
      image: require("../Assests/images/jewellery-nav.png"),
      text: "Jewellery",
      link: "#",
    },
    {
      image: require("../Assests/images/info-nav.png"),
      text: "About Us",
      link: "#",
    },
    {
      image: require("../Assests/images/testimonial-nav.png"),
      text: "Testimonial",
      link: "#",
    },
    {
      image: require("../Assests/images/best-selling-nav.png"),
      text: "Artist Collection",
      link: "/artist-collection",
    },
  ];
  const menuItemsRight = [
    {
      image: require("../Assests/images/search-nav.png"),
      text: "Search",
      link: "#",
      search: true,
    },
    !userData
      ? {
          image: require("../Assests/images/profile-nav.png"),
          text: "Login",
          link: "/login",
        }
      : {},
    {
      image: require("../Assests/images/contact-nav.png"),
      text: "Contact Us",
      link: "/contact-us",
    },
    {
      image: require("../Assests/images/wishlist-nav.png"),
      text: "Wishlist",
      link: "#",
      count: true,
    },
    {
      image: require("../Assests/images/cart-nav.png"),
      text: "Cart",
      link: "#",
      count: true,
    },
  ];

  return (
    <>
      <AppBar
        disableGutters
        sx={{
          boxShadow: hfix ? "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" : "none",
        }}
        className={classes.appBar}
      >
        <Box component="div" className={classes.headTop} disableGutters>
          <Typography variant="p" disableGutters className={classes.headTopP}>
            New Year sale discount off 30%!{" "}
            <Box
              component={Link}
              to="#"
              className={classes.headtoplink}
              disableGutters
            >
              Shop Now
            </Box>
          </Typography>
        </Box>
        <Box component="div" className={classes.botHead} disableGutters>
          <Container disableGutters className={classes.cont}>
            <Box
              component="div"
              sx={(theme) => ({
                [theme.breakpoints.up("laptop")]: {
                  display: "none",
                },
              })}
            >
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                  },
                }}
              >
                <DrawerHeader
                  sx={{
                    justifyContent: "space-between",
                    backgroundColor: "#FFFF",
                    padding: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt=""
                    sx={{ width: "4em", height: "auto" }}
                  />
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon sx={{ color: "#BD3D3D" }} />
                    ) : (
                      <ChevronRightIcon sx={{ color: "#BD3D3D" }} />
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider sx={{ borderColor: "#BD3D3D" }} />
                <List sx={{ backgroundColor: "#FFFF", flex: "1" }}>
                  {menuItemsLeft.map((item, i) => (
                    <ListItem
                      key={i}
                      onClick={(event) => {
                        handleMenuItemClick(event, i);
                      }}
                      disablePadding
                      component={Link}
                      to={item.link}
                      className={classes.drawList}
                    >
                      <ListItemButton component={Link} to={item.link}>
                        <ListItemIcon>
                          <Box
                            component="img"
                            disableGutters
                            src={item.image}
                            alt=""
                            className={classes.navImg1}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  {menuItemsRight.map((item, i) => (
                    <>
                      {!item.search && (
                        <ListItem
                          key={i}
                          onClick={(event) => {
                            handleMenuItemClick(event, i);
                          }}
                          disablePadding
                          component={Link}
                          to={item.link}
                          className={classes.drawList}
                        >
                          <ListItemButton component={Link} to={item.link}>
                            <ListItemIcon>
                              <Box
                                component="img"
                                disableGutters
                                src={item.image}
                                alt=""
                                className={classes.navImg1}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                        </ListItem>
                      )}
                    </>
                  ))}
                </List>
              </SwipeableDrawer>
            </Box>
            <Box
              component="div"
              disableGutters
              sx={(theme) => ({
                display: "flex",
                justifyContent: "space-between",
                [theme.breakpoints.up("laptop")]: {
                  display: "none",
                },
              })}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleDrawerOpen}
                disableRipple
              >
                <MenuIcon
                  sx={{
                    width: "2rem",
                    height: "2rem",
                    color: "#BD3D3D",
                  }}
                />
              </IconButton>
              {userData && (
                  <IconButton
                    disableGutters
                    disableRipple
                    className={classes.navicon}
                  >
                    <>
                      <Button
                        id="basic-button"
                        aria-controls={True ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={True ? "true" : undefined}
                        onClick={handleClick}
                      >
                        Dashboard
                      </Button>
                    </>
                  </IconButton>
                )}
            </Box>
            <Box
              component={Link}
              to="/"
              disableRipple
              className={
                location.pathname === "/" ? classes.wlogo : classes.wlogo1
              }
            >
              <Box
                component="img"
                disableGutters
                src={logo}
                alt="Website logo"
                sx={{
                  width: "9rem",
                  top:"10px",
                  position: "relative",
                  [theme.breakpoints.down("mobile")]: {
                    width: "6rem",
                    top:"15px"
                  },
                  [theme.breakpoints.down("small")]: {
                    width: "6rem",
                  },
                }}
              />
            </Box>
            <Box
              component="div"
              className={classes.navMain}
              disableGutters
              sx={(theme) => ({
                [theme.breakpoints.down("laptop")]: {
                  display: "none",
                },
              })}
            >
              <Box component="div" disableGutters className={classes.navLeft}>
                {menuItemsLeft.map((item, index) => (
                  <Box
                    component={Link}
                    to={item.link}
                    disableGutters
                    key={index}
                    className={classes.navItem}
                  >
                    <IconButton
                      disableGutters
                      disableRipple
                      className={classes.navicon}
                    >
                      <Box
                        component="img"
                        disableGutters
                        src={item.image}
                        alt=""
                        className={classes.navImg}
                      />
                    </IconButton>
                    <Box component="span" className={classes.ItemTtl}>
                      {item.text}
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box component="div" disableGutters className={classes.navLeft}>
                {menuItemsRight.map((item, index) => (
                  <>
                    {item.text && (
                      <Box
                        component={Link}
                        to={item.link}
                        disableGutters
                        key={index}
                        className={classes.navItem}
                      >
                        <IconButton
                          disableGutters
                          disableRipple
                          className={classes.navicon}
                          {...(item.search
                            ? {
                                onClick: () => {
                                  openSearch();
                                },
                              }
                            : {})}
                        >
                          <Box
                            component="img"
                            disableGutters
                            src={item.image}
                            alt=""
                            className={classes.navImg}
                          />
                          {item.count && (
                            <Box
                              component="span"
                              disableGutters
                              className={classes.count}
                            >
                              3
                            </Box>
                          )}
                        </IconButton>
                        <Box component="span" className={classes.ItemTtl}>
                          {item.text}
                        </Box>
                      </Box>
                    )}
                  </>
                ))}
                <Box>
                  {userData && (
                    <IconButton
                      disableGutters
                      disableRipple
                      className={classes.navicon}
                    >
                      <>
                        <Button
                          id="basic-button"
                          aria-controls={True ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={True ? "true" : undefined}
                          onClick={handleClick}
                        >
                          Dashboard
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={True}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuList>
                            {navConfig.map((item) => (
                              <MenuItem
                                component={Link}
                                to={item.path}
                                onClick={handleClose}
                              >
                                <ListItemIcon onClick={item.onClick}>
                                  <ListItemIcon
                                    className={classes?.ListItemIconStyle}
                                  >
                                    <Box
                                      className={classes.cardImage}
                                      component="img"
                                      src={item?.icon && item?.icon}
                                      alt=""
                                      sx={(theme) => ({
                                        width: "20px",
                                        height: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                      })}
                                    />
                                  </ListItemIcon>
                                </ListItemIcon>
                                <ListItemText onClick={item.onClick}>
                                  {item?.title}
                                </ListItemText>
                              </MenuItem>
                            ))}
                          </MenuList>
                        </Menu>
                      </>
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {isopen && <SearchBox openSearch={openSearch} />}
      </AppBar>
    </>
  );
}

export default Header;
