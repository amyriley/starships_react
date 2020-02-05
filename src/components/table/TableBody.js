import React from "react";
import OverviewTableRow from "./OverviewTableRow";

import TableBody from "@material-ui/core/TableBody";

const uuid = require("uuid/v4");

const TBody = props => {
  return (
    <TableBody>
      {props.starships.map(starship => (
        <OverviewTableRow key={uuid()} starship={starship} />
      ))}
    </TableBody>
  );
};

export default TBody;
