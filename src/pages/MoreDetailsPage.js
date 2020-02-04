import React from "react";

const MoreDetailsPage = props => {
  console.log("more details page", props.location.state.starship);
  const starship = props.location.state.starship;
  return (
    <div>
      <h1>More Details</h1>
      <h2>{props.location.state.starship.name}</h2>
      <h3>{starship.name}</h3>
    </div>
  );
};

export default MoreDetailsPage;
