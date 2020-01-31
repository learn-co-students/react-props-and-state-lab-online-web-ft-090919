import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets = () => {
    console.log(this.props.pets)
  return this.props.pets.map(pet => {
    return <Pet onAdoptPet={this.props.onAdoptPet} pet={pet} />
  })  
  }
  render() {
    return (
      <div className="ui cards">
        {this.generatePets()}
      </div>
    )
  }
}

export default PetBrowser
