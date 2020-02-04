import React from "react";
import TableRow from "./TableRow";

const uuid = require("uuid/v4");

const TableBody = props => {
  return (
    <tbody>
      {props.starships.map(starship => (
        <TableRow key={uuid()} starship={starship} />
      ))}
    </tbody>
  );
};

export default TableBody;
