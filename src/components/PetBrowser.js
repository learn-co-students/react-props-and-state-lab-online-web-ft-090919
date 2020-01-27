import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  createPetCards = () => {
    return this.props.pets.forEach(pet => <Pet pet={pet} />)
  }
  
  render() {
    return <div className="ui cards">{this.createPetCards()}</div>
  }
}

export default PetBrowser
