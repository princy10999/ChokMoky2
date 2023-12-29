import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import {
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";

const useStyles = makeStyles()((theme) => {
  return {
    countForm: {
      borderRadius: "0px",
    },
    buttonCount: {
      width: "20px",
      minWidth: "20px",
      fontSize: "1rem",
      color: "#9D9B9B",
    },
    // inputText: {
    //     color: 'red',
    //     fontWeight:"500",
    //     fontSize: "1.3rem",
    // }
  };
});
const Counter = () => {
  const { classes } = useStyles();
  const [counter, setCounter] = useState(1);

  let decrementCounter = () => {
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  if (counter <= 0) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <Box>
      <FormControl
        sx={{ m: 1, width: "11ch" }}
        variant="outlined"
        className={classes?.countForm}
      >
        <OutlinedInput
          id="count"
          value={counter}
          size="small"
          className={classes?.countForm}
          InputProps={{
            className: classes.inputText,
          }}
          startAdornment={
            <InputAdornment position="start">
              <Button
                onClick={decrementCounter}
                className={classes?.buttonCount}
              >
                -
              </Button>
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="and">
              <Button
                onClick={incrementCounter}
                className={classes?.buttonCount}
              >
                +
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Counter;
