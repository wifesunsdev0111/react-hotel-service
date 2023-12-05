import React from "react";
import { Box, TableContainer, Table, TableBody, TableRow, TableCell, useTheme, Paper, useMediaQuery } from "@mui/material";

const TableBox = ({ details, land, popul_D }) => {
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const theme = useTheme()
    return (
        <Box mt="1rem"
            borderRadius="1rem"
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gap="20px"
            sx={{
                "& > div": {
                    gridColumn: isNonMediumScreens ? undefined : "span 12",
                },
            }}
            zIndex={1}>
            <Box
                gridColumn="span 6"
                gridRow="span 1"
                flexDirection="column"
                p="1.8rem 0.9rem"
                flex="1 1 100%"

            >
                <TableContainer component={Paper} className="card">
                    <Table aria-label="simple table">
                        <TableBody>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Population</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    {details.population_count}
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Population Density</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    {popul_D} people per sq mi
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Housing Units</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    {details.housing_count}
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Median Home Value</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    ${details.median_home_value}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                gridColumn="span 6"
                gridRow="span 1"
                display="flex"
                flexDirection="column"
                p="1.8rem 0.9rem"
                flex="1 1 100%"
            >
                <TableContainer component={Paper} className="card">
                    <Table
                        aria-label="simple table"
                        sx={{ borderLeft: "none", borderRight: "none" }}
                    >
                        <TableBody>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Land Area</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    {land} sq mi
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Water Area</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    {(details.area_water / 2589988).toFixed(3)} sq mi
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Median Gross Rent</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    ${details.median_gross_rent}
                                </TableCell>
                            </TableRow>
                            <TableRow
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell
                                    sx={{ fontSize: "0.9rem" }}
                                    component="th"
                                    align="left"
                                    scope="row"
                                >
                                    <b>Median Household Income</b>
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.9rem" }} align="left">
                                    ${details.median_household_income}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >

    )
}

export default TableBox