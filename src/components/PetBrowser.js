import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  generatePets = () => {
    return this.props.pets.map(pet => 
      // <Pet key={pet.id} name={pet.name} adoptHelper={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} onAdoptPet={this.props.onAdoptPet} />
      <Pet pet={pet} key={pet.id} adoptHelper={pet.id} onAdoptPet={this.props.onAdoptPet} />
    )
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
