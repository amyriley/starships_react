import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.headers.map(header => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
