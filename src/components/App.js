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

  onChangeType = type => {
    this.setState({
        filters: {
            type: type
        }
    });

    console.log(this.state.pets);
  }

    onFindPetsClick = () => {
        let slug = this.state.filters.type === 'all' ? '' : '?type=' + this.state.filters.type
        fetch('/api/pets' + slug).then(resp => resp.json()).then(pets => {
            console.log(pets);
            this.setState({
                pets: pets
            })
        });
    }

    onAdoptPet = petId => {
        this.setState(prevState => {
            let pets = prevState.pets;
            pets.find(pet => pet.id === petId).isAdopted = true;
            return { pets: pets};
        });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
