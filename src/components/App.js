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

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p
    })
    this.setState({ pets: pets })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type != 'all') {
      url = `${url}?type=${this.state.filters.type}`
    }
    fetch(url)
    .then (res => res.json())
    .then (pets => this.setState({
      pets: pets
    }))
  }


  onChangeType = e => {
    this.setState({
      filters: {
        ...this.state.filters, type: e.target.value
      }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
