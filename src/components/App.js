import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }


  onFindPetsClick = () => {
    let fetchURL = "/api/pets"

    if (this.state.filters.type !== "all") {
      fetchURL += `?type=${this.state.filters.type}`
    }

    fetch(fetchURL)
      .then(result => result.json())
      // .then(petData => this.setState({pets: petData}))
      .then(petData => {this.updatePetState(petData)})
  }


  updatePetState = (petData) => {
    this.setState({
      pets: [petData]
    })
  }


  onAdoptPet = (id) => {
   let pets = this.state.pets.map(pet => {
     return pet.id === id ? {...pet, isAdopted: true } : pet 
    })
    this.setState({
      pets: pets
    })
  }



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
