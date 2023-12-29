import React from "react";
import { makeStyles } from "tss-react/mui";
import { Box } from "@mui/material";
import Heading from "../../Components/Common/Heading";
import PrivacyCommon from "../../Components/Common/PrivacyCommon";

const useStyles = makeStyles()((theme) => {
    return {
        privacyPage: {
            marginTop: '70px',
            [theme.breakpoints.down("xTab")]: {
                marginTop: '45px',
            },
        },
        head: {
            marginBottom: '80px',
            [theme.breakpoints.down("xTab")]: {
                marginBottom: '45px',
            },
        },

    };
});
const data = [
    {
        id: "1",
        qun: "1. Welcome to company Privacy Policy",
        ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    },
    {
        id: "2",
        qun: "2. Information You Provide",
        ans: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
    },
    {
        id: "3",
        qun: "3. Information We Receive from Other Sources",
        ans: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with sions of Lorem.",
    },
    {
        id: "4",
        qun: "4. Security",
        ans: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem.",
    },
    {
        id: "5",
        qun: "5. New company Privacy Policy",
        ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    }
]
const PrivacyPolicy = () => {
    const { classes } = useStyles();
    return (
        <Box className={classes.privacyPage}>
            <Box component="div" className={classes.head}>
                <Heading
                    title="Privacy & Policy"
                    bgText="P"
                    fontFamily="Jost"
                    subTitle="Through original imagery and editorial perspectives, we bring you unique point newviews."
                    size="42px"
                    tabsize="40px"
                    iphsize="25px"
                    h="120px"
                    tabh="104px"
                    mobilebott="75px"
                    iphh="84px"
                    lapbott="56px"
                    iphbott="71px"
                />
            </Box>
            <PrivacyCommon data={data} />
        </Box>
    )
}

export default PrivacyPolicy