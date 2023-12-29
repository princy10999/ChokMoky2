import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from 'tss-react/mui';
import girl from "../Assests/images/order_img2.png";
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Container, Stack, Typography } from '@mui/material';

function createData(name, price, orderDate, deliveryDate, status) {
    return { name, price, orderDate, deliveryDate, status };
}

const rows = [
    createData('Silver Diamond Waves Ring', '₹300', '05/12/2022', '-', 'Pending'),
    createData('Silver Diamond Waves Ring', '₹750', '18/11/2022', '18/11/2022', 'Delivered'),
];

const useStyles = makeStyles()((theme) => {
    return {
        containerBox: {
            paddingLeft: "0px",
            paddingRight: "0px",
        },
        tablerow: {
            borderBottom: "1px solid #D6D6D6",
        },
        tableHeadName: {
            fontFamily: 'League Spartan',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: "39px",
            padding: '0px 10px 0px 10px',
            border: 'none',
            color: "#3D3D47",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("tab")]: {
                fontSize: "18px",
              },
        },
        productName: {
            fontFamily: 'League Spartan',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '19px',
            lineHeight: "17.48px",
            border: 'none',
            color: "#2F2F2D",
            marginTop: "5px",
            marginBottom: "12px",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("tab")]: {
                fontSize: "17px",
              },
        },
        productPrice: {
            fontFamily: 'League Spartan',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '19px',
            lineHeight: "17.48px",
            color: "#3D3D47",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("tab")]: {
                fontSize: "17px",
              },
        },
        orderDate: {
            fontFamily: 'League Spartan',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: "14.72px",
            color: "#3D3D47",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("tab")]: {
                fontSize: "14px",
              },
        },
        status: {
            fontFamily: 'League Spartan',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: "24px",
            whiteSpace: "nowrap",
            [theme.breakpoints.down("tab")]: {
                fontSize: "16px",
              },
        },
        Img: {
            height: "84px",
            width: "81px",
        },

    };
});

export default function ShoppingCartTable() {
    const { classes, cx } = useStyles();
    return (
        <Container className={classes.containerBox}>
            <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow className={classes.tablerow}>
                            <TableCell className={classes.tableHeadName}>Product</TableCell>
                            <TableCell className={classes.tableHeadName} align="center">Order Date</TableCell>
                            <TableCell className={classes.tableHeadName} align="center">Delivery Date</TableCell>
                            <TableCell className={classes.tableHeadName} align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ border: "none", boxShadow: 'none' }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ boxShadow: 'none' }}
                            >
                                <TableCell component="th" scope="row" sx={{pl:0}}>
                                    <Stack
                                        direction="row"
                                        spacing={{ xSmall: 1.9 }}
                                        className={classes.imgBox}
                                    >
                                        <Box
                                            component="img"
                                            src={girl}
                                            alt=""
                                            className={classes.Img}
                                        />
                                        <Box>
                                            <Typography className={classes.productName}>
                                                {row.name}
                                            </Typography>
                                            <Typography className={classes.productPrice}>
                                                {row.price}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </TableCell>
                                <TableCell className={classes.orderDate} align="center">{row.orderDate}</TableCell>
                                <TableCell className={classes.orderDate} align="center">{row.deliveryDate}</TableCell>
                                <TableCell className={classes.status} align="center">{row.status}</TableCell>
                                <TableCell sx={{pr:0}}>
                                    <Stack
                                        direction="row"
                                        spacing={{ xSmall: 1.9 }}
                                        className={classes.imgBox}
                                    >
                                        <RemoveRedEyeOutlinedIcon sx={{ color: "#858A8C" }} />
                                        <CloseIcon sx={{ color: "#858A8C" }} />

                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}