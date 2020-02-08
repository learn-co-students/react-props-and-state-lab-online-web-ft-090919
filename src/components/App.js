import React from 'react'
import { getAll, getByType } from '../data/pets';
import Filters from './Filters'
import PetBrowser from './PetBrowser'

const ALL_PETS = getAll()

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

  onAdoptPet = petId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    
    this.setState({
      pets: pets
    })
  }

  onChangeType = (event) => {
    // Update this.state.filters.type
    this.setState({ 
      filters: { 
        ...this.state.filters, 
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    // Grab this.state.pets and fetch the resource based on what's in the array
    let endpoint = '/api/pets';

    // append '?type=state.type' to filter if type isn't 'all'
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }))
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets} 
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
