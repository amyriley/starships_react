import React from "react";

import TableCellHeader from "./TableCellHeader";
import TableCell from "./TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const uuid = require("uuid/v4");

const MoreDetailsTable = props => {
  return (
    <TableBody>
      {props.moreDetails.map(detail => (
        <TableRow key={uuid()}>
          <TableCellHeader value={detail.header} />
          <TableCell value={detail.property} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default MoreDetailsTable;
