import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box,Pagination} from "@mui/material";
import CollectionHeader from "../../Components/CollectionHeader";
import CollectionHeadPart from "../../Components/Common/CollectionHeadPart";
import CollectionData from '../../Components/CollectionData';
import CommonSelect from "../../Components/Common/CommonSelect";
import SelectSection from "../../Components/SelectSection";

const useStyles = makeStyles()((theme) => {
  return {
    CollectionSection: {
      // marginTop: "113px",
    },
  };
});

const Search = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.CollectionSection}>
      <CollectionHeader />
      <SelectSection m="2rem 9rem 1rem 9rem" b="1px solid #D9D9D9" desktopm="2rem 7rem 1rem 7rem" laptopm="2rem auto 1rem auto"/>
      <CollectionData/>
    </Box>
  );
};

export default Search;
