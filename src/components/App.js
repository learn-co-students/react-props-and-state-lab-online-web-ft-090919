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


  handleTypeChange = (pet) => {
    this.setState({
      filters:{
        type: pet
      }
    })
  }

  filterPets = () =>{
    let petLink
    let pet = this.state.filters.type
    let allPets = []
    pet === 'all' ? petLink = '/api/pets' : petLink = `/api/pets?type=${pet}`
    fetch(petLink)
    .then(resp => resp.json())
    .then(pets => {
      pets.forEach(pet => {
        allPets.push(pet)
      });
      this.setState({
        pets: allPets
      })
    })
  }
  

  handleAdoption = (id) => {
    const pet = this.state.pets.filter(pet => pet.id === id )
    const i = this.state.pets.indexOf(pet[0])
    let pets = this.state.pets
    pets[i].isAdopted = true
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.filterPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
