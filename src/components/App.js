import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      isAdopted: false,
      filters: {
        type: 'all'
      }
    }
    this.handleClick()
  }

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: value
      }
    })
  }

  adoptPet = (id) => {
    let pets = this.state.pets.map( pet => {
      if (pet.id == id){
        return {...pet, isAdopted: true}
      }else{
        return pet
      }
    })
    this.setState({
      pets: pets
    })

  }

  handleClick = () => {
    let url = this.state.filters.type == 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({
      pets: data
    }))
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.handleClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
