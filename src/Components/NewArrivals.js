import React from "react";
import Heading from "./Common/Heading";
import { makeStyles } from "tss-react/mui";
import NewArrivalCard from "./Common/NewArrivalCard";
import StyledButton1 from "./Common/StyledButton1";
import { Box } from "@mui/material";

const useStyles = makeStyles()((theme) => {
  return {
    NewArrival:{
      marginTop:"83px",
    }
  };
});

const NewArrivals = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.NewArrival}>
      <Heading
        title="New Arrivals"
        subTitle="Through original imagery and editorial perspectives, we bring you unique point new views."
        bgText="N"
        fontFamily="League Spartan, serif"
        h="128px"
        tabh="105px"
        iphh="90px"
        smallbott="72px"
      />
      <NewArrivalCard />
      <Box display={"flex"}>
        <StyledButton1 text={"Explore All"} link="#"></StyledButton1>
      </Box>
    </Box>
  );
};

export default NewArrivals;
