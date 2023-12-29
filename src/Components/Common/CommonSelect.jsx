import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "tss-react/mui";
import { IndeterminateCheckBox } from '@mui/icons-material';

const useStyles = makeStyles()((theme) => {
  return {
    selectBox: {
      width: "100%",
      [theme.breakpoints.down("tab")]: {
        marginTop: "10px" ,
      },
     
    },
    formCon: {
      width: "100%",
    },
  };
});

export default function CommonSelect(props) {
  const { classes } = useStyles();

  return (
    <Box className={classes.selectBox}>
      <FormControl className={classes.formCon} size="small">
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>


        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={props.name}
          value={props.value}
          label={props.title && props.title}
          onChange={props.handleChange}
          MenuProps={{
            style: {
              maxHeight: '40rem'
            }
          }}
         variant="outlined"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {props.data.map((item, index) => (
            <MenuItem value={item.value}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

