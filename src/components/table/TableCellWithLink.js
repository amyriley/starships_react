import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const TableCellWithLink = props => {
  return (
    <td>
      <Button variant="contained">
        <Link
          to={{
            pathname: `/more-details/${props.starship.name}`,
            state: {
              starship: props.starship
            }
          }}
          style={{ textDecoration: "none", fontSize: 10, color: "black" }}
        >
          More Details
        </Link>
      </Button>
    </td>
  );
};

export default TableCellWithLink;
