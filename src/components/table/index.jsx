import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { TableHeader } from "./TableHeader";
import { getComparator } from "./utils";
export const CustomTable = ({ data }) => {
    //---------------------------------------------------
    //Sorting Logic
    //---------------------------------------------------
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("");
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    //---------------------------------------------------
    //Pagination Logic
    //---------------------------------------------------
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="medium">
                        <TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                        <TableBody>
                            {data
                                .slice()
                                .sort(getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const { id, name, username, email, address } = row;

                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <TableRow tabIndex={-1} key={id}>
                                            <TableCell component="th" id={labelId} scope="row">
                                                {id}
                                            </TableCell>
                                            <TableCell>{name}</TableCell>
                                            <TableCell>{username}</TableCell>
                                            <TableCell>{email}</TableCell>
                                            <TableCell>{address.city}</TableCell>
                                            <TableCell>
                                                <Button variant="contained">Edit</Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="contained">Delete</Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

CustomTable.propTypes = {
    users: PropTypes.array
};
