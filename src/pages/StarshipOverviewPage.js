import React from "react";
import TableHeader from "../components/table/TableHeader";
import TableBody from "../components/table/TableBody";

const headers = ["Name", "Length", "Crew", "More Details"];

const StarshipOverviewPage = props => {
  return (
    <div>
      <h1>Starships Overview</h1>
      <table>
        <TableHeader headers={headers} />
        <TableBody starships={props.starships} />
      </table>
    </div>
  );
};

export default StarshipOverviewPage;
