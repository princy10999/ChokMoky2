import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box, Typography } from "@mui/material";


const useStyles = makeStyles()((theme) => {
    return {
        mainBox: {
            margin: '10px 200px 90px',
            [theme.breakpoints.down("mLaptop")]:{
                margin: '10px 100px 90px', 
            },
            [theme.breakpoints.down("laptop")]:{
                margin: '10px 70px 90px', 
            },
            [theme.breakpoints.down("stab")]:{
                margin: '10px 50px 90px', 
            },
            [theme.breakpoints.down("iph")]:{
                margin: '10px 30px 90px', 
            },
        },
        qunBox: {
            marginBottom: '30px',
        },
        qun: {
            fontFamily: "League Spartan",
            fontSize: "22px",
            lineHeight: "27px",
            fontWeight: "500",
            color: "#56565E",
            [theme.breakpoints.down("xTab")]:{
                fontSize: "20px",
            },
            [theme.breakpoints.down("iph")]:{
                fontSize: "18px",
            },
        },
        ans: {
            fontFamily: "League Spartan",
            fontSize: "17px",
            lineHeight: "26px",
            fontWeight: "400",
            color: "#858A8C",
            [theme.breakpoints.down("xTab")]:{
                fontSize: "15px",
            },
        },
    };
});
const PrivacyCommon = ({ data }) => {
    console.log(data)
    const { classes } = useStyles();
    return (
        <Box component="div" className={classes.mainBox} >
            {data.map((item, index) => (
                <Box component="div" className={classes.qunBox} >
                    <Typography variant="subtitle2" className={classes.qun}>
                        {item?.qun}
                    </Typography>
                    <Typography variant="body2" className={classes.ans}>
                        {item?.ans}
                    </Typography>
                </Box>

            ))}
        </Box>
    )
}

export default PrivacyCommon