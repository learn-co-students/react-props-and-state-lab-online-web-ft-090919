// Below line solves compile error when on line 12
/* eslint-disable no-unused-expressions */

import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    const petCards = this.props.pets.map(pet => {
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet}/>
    })

    return (
      <div className="ui cards">{petCards}</div>
    )
  }
}


export default PetBrowser
