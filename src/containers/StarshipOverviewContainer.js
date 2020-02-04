import React, { Component } from "react";
import StarshipOverviewPage from "../pages/StarshipOverviewPage";

export class StarshipOverviewContainer extends Component {
  state = {
    starships: []
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    fetch("https://cdn-global.splicky.com/_cdn/starships.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            starships: result.results
          });
          console.log(result.results);
        },
        error => {
          console.log(error);
        }
      );
  };
  render() {
    return (
      <div>
        <StarshipOverviewPage starships={this.state.starships} />
      </div>
    );
  }
}

export default StarshipOverviewContainer;
