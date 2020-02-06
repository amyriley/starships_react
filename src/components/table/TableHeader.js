import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const TableHeader = props => {
  return (
    <TableHead>
      <TableRow>
        {props.headers.map(header => (
          <TableCell
            style={{ color: "white", fontWeight: "bold", letterSpacing: 2 }}
            key={header}
          >
            {header}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
