import { Box, Button, Typography, Modal } from '@mui/material'
import React from 'react'
import { makeStyles } from "tss-react/mui";
import video from "../../Assests/images/test.mp4"


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 800,
//     height: 600,
//     bgcolor: 'background.paper',
//     // border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
const useStyles = makeStyles()((theme) => {
    return {
        style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            height: 500,
            bgcolor: 'background.paper',
            // border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            [theme.breakpoints.down("tab")]: {
                width: "100%",
                height: 400,
            },
        },
    }
})


const ModalCommon = ({ handleOpen, open, handleClose }) => {
    const { classes } = useStyles()
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes?.style}>
                <video autoPlay width="100%" height="100%" controls >
                    <source src={video} type="video/mp4" />
                </video>
            </Box>
        </Modal>
    )
}

export default ModalCommon