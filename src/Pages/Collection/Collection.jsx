import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";
import CollectionHeader from "../../Components/CollectionHeader";
import CollectionHeadPart from "../../Components/Common/CollectionHeadPart";
import CollectionData from './../../Components/CollectionData';

const useStyles = makeStyles()((theme) => {
  return {
    CollectionSection: {
      marginTop: "113px",
    },
  };
});

const Collection = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.CollectionSection}>
      <CollectionHeader />
      <CollectionData/>
      
    </Box>
  );
};

export default Collection;
