import React from "react";
import TableCell from "./TableCell";
import TableCellWithLink from "./TableCellWithLink";

const uuid = require("uuid/v4");

const TableRow = props => {
  const { name, length, crew } = props.starship;

  return (
    <tr>
      {[name, length, crew].map(value => (
        <TableCell key={uuid()} value={value} />
      ))}
      <TableCellWithLink
        to={`/more-details/${name}`}
        starship={props.starship}
      />
    </tr>
  );
};

export default TableRow;
