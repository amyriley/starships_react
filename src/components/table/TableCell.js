import React from "react";

import TableCell from "@material-ui/core/TableCell";

const Cell = props => {
  return (
    <TableCell style={{ color: "white", width: 100 }}>{props.value}</TableCell>
  );
};

export default Cell;
