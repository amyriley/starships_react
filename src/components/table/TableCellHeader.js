import React from "react";

import TableCell from "@material-ui/core/TableCell";

const Cell = props => {
  return (
    <TableCell style={{ fontWeight: "bold", color: "white", width: 5 }}>
      {props.value}
    </TableCell>
  );
};

export default Cell;
