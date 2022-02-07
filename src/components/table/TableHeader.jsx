import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { TableHeaderCol } from "./TableHeaderCol";
export const TableHeader = ({ order, orderBy, onRequestSort }) => {
    const TABLE_HEADERS = [
        {
            id: "id",
            label: "Id",
            isColumnSortable: true
        },
        {
            id: "name",
            label: "Name",
            isColumnSortable: false
        },
        {
            id: "username",
            label: "Username",
            isColumnSortable: true
        },
        {
            id: "email",
            label: "Email",
            isColumnSortable: false
        },
        {
            id: "city",
            label: "City",
            isColumnSortable: false
        },
        {
            id: "edit",
            label: "Edit",
            isColumnSortable: false
        },
        {
            id: "delete",
            label: "Delete",
            isColumnSortable: false
        }
    ];
    return (
        <TableHead>
            <TableRow>
                {TABLE_HEADERS.map((column) => {
                    const { id, label, isColumnSortable } = column;
                    return (
                        <TableHeaderCol
                            key={id}
                            id={id}
                            label={label}
                            order={order}
                            orderBy={orderBy}
                            isColumnSortable={isColumnSortable}
                            onRequestSort={onRequestSort}
                        />
                    );
                })}
            </TableRow>
        </TableHead>
    );
};

TableHeader.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired
};
