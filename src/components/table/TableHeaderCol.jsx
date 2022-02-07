import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";

export const TableHeaderCol = ({ isColumnSortable = false, id, label, order, orderBy, onRequestSort }) => {
    if (!isColumnSortable) {
        return (
            <TableCell>
                <div>{label}</div>
            </TableCell>
        );
    }
    return (
        <TableCell key={id} sortDirection={orderBy === id ? order : false}>
            <TableSortLabel
                active={orderBy === id}
                direction={orderBy === id ? order : "asc"}
                onClick={() => onRequestSort(id)}
            >
                {label}
                {orderBy === id ? (
                    <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                    </Box>
                ) : null}
            </TableSortLabel>
        </TableCell>
    );
};

TableHeaderCol.propTypes = {
    isColumnSortable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired
};
