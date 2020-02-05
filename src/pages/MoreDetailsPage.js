import React from "react";
import MoreDetailsTable from "../components/table/MoreDetailsTable";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  table: {
    marginBottom: 50
  }
});

const MoreDetailsPage = props => {
  const starship = props.location.state.starship;

  const classes = useStyles();

  const moreDetails = [
    {
      header: "Model",
      property: starship.model
    },
    {
      header: "Manufacturer",
      property: starship.manufacturer
    },
    {
      header: "Cost in credits",
      property: starship.cost_in_credits
    },
    {
      header: "Length",
      property: starship.length
    },
    {
      header: "Passengers",
      property: starship.passengers
    },
    {
      header: "Cargo capacity",
      property: starship.cargo_capacity
    }
  ];

  return (
    <Container maxWidth="sm">
      <Typography component="div">
        <Box letterSpacing={2} m={5} fontWeight="fontWeightBold">
          More details about: {starship.name}
        </Box>
      </Typography>
      <Table className={classes.table}>
        <MoreDetailsTable moreDetails={moreDetails} />
      </Table>
      <Button href="/" variant="contained" color="#263238">
        Back
      </Button>
    </Container>
  );
};

export default MoreDetailsPage;
