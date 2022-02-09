import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { TableHeader } from "./TableHeader";
import { getComparator } from "../../utils";
import { useStyles } from "./styles";

export const CustomTable = ({ data, onDeleteUser, onEditUser }) => {
    const classes = useStyles();

    //Sorting Logic
    const [order, setOrder] = useState("asc"); //Ascending or Descending
    const [orderBy, setOrderBy] = useState(""); //Column to trigger order from
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    //Pagination Logic
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = () => {
        const pageData = data
            .slice()
            .sort(getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

        //In case there is no longer data on the page user is currently viewing, automatically go to previous page
        if (pageData.length === 0 && page !== 0) {
            setPage((prevState) => prevState - 1);
        }
        return pageData;
    };

    return (
        <Box className={classes.tableContainer}>
            <TableContainer>
                <Table aria-labelledby="tableTitle" size="medium">
                    <TableHeader order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                    <TableBody>
                        {data.length > 0 ? (
                            paginatedData().map((row, index) => {
                                const { id, name, username, email, address } = row;

                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow tabIndex={-1} key={id}>
                                        <TableCell component="th" id={labelId} scope="row">
                                            {id}
                                        </TableCell>
                                        <TableCell>{name}</TableCell>
                                        <TableCell className={classes.username}>{username}</TableCell>
                                        <TableCell className={classes.email}>{email}</TableCell>
                                        <TableCell>{address.city}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() => onEditUser(row)}
                                                sx={{
                                                    backgroundColor: (theme) => theme.palette.yellow,
                                                    "&.MuiButtonBase-root:hover": {
                                                        bgcolor: (theme) => theme.palette.yellow
                                                    }
                                                }}
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() => onDeleteUser(id)}
                                                sx={{
                                                    backgroundColor: (theme) => theme.palette.error.main,
                                                    "&.MuiButtonBase-root:hover": {
                                                        bgcolor: (theme) => theme.palette.error.main
                                                    }
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan="7" className={classes.emptyTableCell}>
                                    There are currently no users to display
                                </TableCell>
                            </TableRow>
                        )}
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
        </Box>
    );
};

CustomTable.propTypes = {
    users: PropTypes.array,
    onDeleteUser: PropTypes.func.isRequired,
    onEditUser: PropTypes.func.isRequired
};
