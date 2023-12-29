import { TextField } from "@mui/material";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const SimpleInput = ({
  className,
  id,
  label,
  variant,
  name,
  onChange,
  error,
  helperText,
  eye,
  showPassword,
  handleClickShowPassword,
  showPassword1,
  handleClickShowPassword1,
  marginr,
  eye1,
}) => {
  return (
    <TextField
      className={className}
      fullWidth
      id={id}
      label={label}
      sx={(theme) => ({
        marginRight: marginr ? marginr : 0,
        [theme.breakpoints.down("iph")]: {
          marginRight: "0px",
        },
      })}
      variant={variant ? variant : "outlined"}
      name={name}
      onChange={onChange}
      type={!showPassword && !showPassword1 ? "text" : "password"}
      helperText={helperText}
      InputProps={{
        style: {
          height: "60px",
        },
        endAdornment: (
          <>
            {eye && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            )}
            {eye1 && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                >
                  {showPassword1 ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            )}
          </>
        ),
      }}
    />
  );
};
