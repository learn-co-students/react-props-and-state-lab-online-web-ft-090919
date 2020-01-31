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

  onChangetype = (type) => {
    this.setState(previousState => {
      return {
        filters: {
          ...previousState.filters,
          type: type
        }
      }

    })
  }

  onFindPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets').then(response => response.json()).then(json => {
        this.setState({
          pets: json
        })  
      })
      
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`).then(response => response.json()).then(json => {
        this.setState({
          pets: json
        })  
      })
    }


  }

  onAdoptPet = (id) => {
    const foundPet = this.state.pets.find(pet=>{
      if(pet.id === id){return pet}
    })

    foundPet.isAdopted = true

    this.setState(previousState => {
      return ({
        pets: previousState.pets
      })
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
              <Filters onChangetype={this.onChangetype} onFindPetsClick={this.onFindPetsClick}/>
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
