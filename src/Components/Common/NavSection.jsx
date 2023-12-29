import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
} from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import {
  Box,
  List,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
//

const useStyles = makeStyles()((theme) => {
  return {
    ListItemIconStyle: {
      width: 22,
      height: 22,
      color: "inherit",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ListItemBox: {
   
    },
    ListItemList: {},
  };
});

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
  <ListItemButton disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",

  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  fontWeight: "500",
  fontFamily: "League Spartan",
  fontSize: "18.5px",
  LineHeight: "51px",
  background: "white",
  "&:hover": {
    color: "#BD3D3D",
    backgroundColor: "transparent",
  },
  "&:active": {
    color: "#BD3D3D",
    backgroundColor: "transparent",
  },
  "&:last-child": {
    borderTop:"1px solid #E1E2E3",
  },
}));

// ----------------------------------------------------------------------

function NavItem({ item, active }) {
  const theme = useTheme();
  const { classes } = useStyles();

  const isActiveRoot = active(item.path);

  const { title, path, icon, info } = item;

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "400",
    fontFamily: "League Spartan",
    fontSize: "18.5px",
    LineHeight: "51px",
  };

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
      }}
    >
      <ListItemIcon className={classes?.ListItemIconStyle}>
        <Box
          className={classes.cardImage}
          component="img"
          src={icon && icon}
          alt=""
          sx={(theme) => ({
            width: "20px",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
          })}
        />
      </ListItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemStyle>
  );
}

export default function NavSection({ navConfig, ...other }) {
  const { classes } = useStyles();
  const { pathname } = useLocation();

  const match = (path) =>
    path ? !!matchPath({ path, end: false }, pathname) : false;

  return (
    <Box className={classes?.ListItemBox} {...other}>
      <List disablePadding sx={{ p: 1 }} className={classes?.ListItemList}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={match} />
        ))}
      </List>
    </Box>
  );
}
