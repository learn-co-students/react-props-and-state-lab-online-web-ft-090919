import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  renderPetCards = petValues => {
    return petValues.map(petVal => {
      return <Pet onAdoptPet={this.props.onAdoptPet} pet={petVal} />;
    });
  };

  render() {
    return (
      <div className="ui cards">{this.renderPetCards(this.props.pets)}</div>
    );
  }
}

export default PetBrowser;
