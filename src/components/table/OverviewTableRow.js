import React from "react";
import TableCell from "./TableCell";
import TableCellWithLink from "./TableCellWithLink";

import TableRow from "@material-ui/core/TableRow";

const uuid = require("uuid/v4");

const OverviewTableRow = props => {
  const { name, length, crew } = props.starship;

  return (
    <TableRow>
      {[name, length, crew].map(value => (
        <TableCell key={uuid()} value={value} />
      ))}
      <TableCellWithLink
        to={`/more-details/${name}`}
        starship={props.starship}
      />
    </TableRow>
  );
};

export default OverviewTableRow;
