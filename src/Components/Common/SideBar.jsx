import { Link as RouterLink, useLocation } from "react-router-dom";

import { Box, Link, Typography, Avatar, Divider } from "@mui/material";
import dashboard from "../../Assests/images/dashbord.svg";
import edit from "../../Assests/images/edite_profile.svg";
import order from "../../Assests/images/clock.svg";
import checkCircle from "../../Assests/images/check-circle.svg";
import wishlist from "../../Assests/images/hart.svg";
import lock from "../../Assests/images/lock.svg";
import logOut from "../../Assests/images/logout.svg";
import Tester from "../../Assests/images/tester3.png";

import NavSection from "../Common/NavSection";
import { makeStyles } from "tss-react/mui";
//

// ----------------------------------------------------------------------
const useStyles = makeStyles()((theme) => {
  return {
    nanvbox: {
      borderRight: "solid 1px #DDDDDD",
      [theme.breakpoints.down("laptop")]: {
        display: "none",
      },
    },
    navMainBox: {
      
      "& .simplebar-content": {
        // height: 1,
        display: "flex",
        flexDirection: "column",
      },
    },
    avatar: {
      width: "84px",
      height: "84px",
    },
    avatarBox: {
      display: "flex",
      alignItems: "center",
    },
    avatarName: {
      fontFamily: "League Spartan",
      fontSize: "21px",
      lineHeight: "19.32px",
      fontWeight: "500",
      letterSpacing: "3%",
    },
    avatarEmail: {
      fontFamily: "Nunito",
      fontSize: "14px",
      lineHeight: "19.1px",
      fontWeight: "400",
      letterSpacing: "3%",
    },
  };
});

const account = {
  displayName: "Admin",
  email: "admin@gmail.com",
  photoURL: Tester,
};

const navConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
  },
  {
    title: " Edit Profile ",
    path: "/edit-profile",
    icon: edit,
  },
  {
    title: "Order history",
    path: "/order-history",
    icon: order,
  },
  {
    title: "Order Detail",
    path: "/order-details",
    icon: checkCircle,
  },
  {
    title: "wishlist",
    path: "/wishlist",
    icon: wishlist,
  },
  {
    title: "Change password",
    path: "/change-password",
    icon: lock,
  },
  {
    title: "Logout",
    path: "/dashboard/reminder",
    icon: logOut,
  },
];

// ----------------------------------------------------------------------

export default function SideBar({ isOpenSidebar, onCloseSidebar }) {
  const { classes } = useStyles();

  const renderContent = (
    <Box className={classes?.navMainBox}>
      <Box sx={{ mb: 2, mx: 2.5 }}>
        <Link
          underline="none"
          component={RouterLink}
          to="#"
          className={classes?.avatarBox}
        >
          <Avatar
            src={account.photoURL}
            className={classes?.avatar}
            alt="photoURL"
          />
          <Box sx={{ ml: 2 }}>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.primary" }}
              className={classes?.avatarName}
            >
              {account.displayName}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              className={classes?.avatarEmail}
            >
              {account.email}
            </Typography>
          </Box>
        </Link>
      </Box>
      <Divider />
      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Box className={classes?.nanvbox}>{renderContent}</Box>
    </>
  );
}
