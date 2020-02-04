import React from "react";
import { Link } from "react-router-dom";

const TableCellWithLink = props => {
  return (
    <td>
      <Link
        to={{
          pathname: "/more-details",
          state: {
            starship: props.starship
          }
        }}
      >
        See More
      </Link>
    </td>
  );
};

export default TableCellWithLink;
