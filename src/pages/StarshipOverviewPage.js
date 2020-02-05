import React from "react";
import TableHeader from "../components/table/TableHeader";
import TableBody from "../components/table/TableBody";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const headers = ["Name", "Length", "Crew"];

const StarshipOverviewPage = props => {
  return (
    <Container maxWidth="sm">
      <Typography component="div">
        <Box letterSpacing={2} m={5} fontWeight="fontWeightBold">
          Starships Overview
        </Box>
      </Typography>
      <table>
        <TableHeader headers={headers} />
        <TableBody starships={props.starships} />
      </table>
    </Container>
  );
};

export default StarshipOverviewPage;
