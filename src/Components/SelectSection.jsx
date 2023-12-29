import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import CommonSelect from "./Common/CommonSelect";

const useStyles = makeStyles()((theme) => {
  return {
    selectMain: {
      padding: "10px 0px 30px 0px",
      [theme.breakpoints.down("laptop")]: {
        padding: "0rem 3rem 2rem 3rem",
      },
      [theme.breakpoints.down("mobile")]: {
        padding: "0rem 1rem 2rem 1rem",
      },
    },
    selectStack: {
      flexWrap: "nowrap",
      [theme.breakpoints.down("tab")]: {
        flexWrap: "wrap",
      },
    },
  };
});

const keyWord = [
  {
    name: "a",
    value: "1",
  },
  {
    name: "b",
    value: "2",
  },
  {
    name: "c",
    value: "3",
  },
];

const SelectSection = (props) => {
  const { classes } = useStyles();
  const [data, setData] = React.useState({});
  console.log("data", data);
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <Box
      className={classes.selectMain}
      sx={(theme) => ({
        margin: props?.m,
        borderBottom: props?.b,
        [theme.breakpoints.down("desktop")]: {
          margin: props?.desktopm,
        },
        [theme.breakpoints.down("laptop")]: {
          margin: props?.laptopm,
        },
      })}
    >
      <Grid
        container
        spacing={{ xSmall: 1, iph: 2, laptop: 3 }}
        columns={{ xSmall: 4, iph: 4, mobile: 12, laptop: 16 }}
      >
        <Grid item xSmall={4} iph={4} mobile={4} laptop={3.2}>
          <CommonSelect
            title="Keywords"
            name="keywords"
            data={keyWord}
            handleChange={handleChange}
            value={data.keyword}
          />
        </Grid>
        <Grid item xSmall={4} iph={4} mobile={4} laptop={3.2}>
          <CommonSelect
            title="Category"
            name="category"
            data={keyWord}
            handleChange={handleChange}
            value={data.category}
          />
        </Grid>
        <Grid item xSmall={4} iph={4} mobile={4} laptop={3.2}>
          <CommonSelect
            title="Sub category"
            name="sub_category"
            data={keyWord}
            handleChange={handleChange}
            value={data.sub_category}
          />
        </Grid>
        <Grid item xSmall={4} iph={4} mobile={4} laptop={3.2}>
          <CommonSelect
            title="Price Range"
            name="price_range"
            data={keyWord}
            handleChange={handleChange}
            value={data.price_range}
          />
        </Grid>
        <Grid item xSmall={4} iph={4} mobile={4} laptop={3.2}>
          <CommonSelect
            title="Sort By"
            name="sort_by"
            data={keyWord}
            handleChange={handleChange}
            value={data.sort_by}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectSection;
