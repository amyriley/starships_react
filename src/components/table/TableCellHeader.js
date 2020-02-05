import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
  headerCell: {
    fontWeight: 600
  }
});

const Cell = props => {
  const classes = useStyles();
  return <TableCell className={classes.headerCell}>{props.value}</TableCell>;
};

export default Cell;
