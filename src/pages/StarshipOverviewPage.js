import React from "react";
import TableHeader from "../components/table/TableHeader";
import TableBody from "../components/table/TableBody";

import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const headers = ["Name", "Length", "Crew"];

const StarshipOverviewPage = props => {
  return (
    <Container maxWidth="sm" style={{ paddingBottom: 50 }}>
      <Typography component="div">
        <Box
          style={{
            letterSpacing: 2,
            margin: 5,
            fontWeight: "bold",
            paddingBottom: 25,
            paddingTop: 25
          }}
        >
          Starships Overview
        </Box>
      </Typography>
      <Table>
        <TableHeader headers={headers} />
        <TableBody starships={props.starships} />
      </Table>
    </Container>
  );
};

export default StarshipOverviewPage;
