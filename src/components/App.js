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

  onAdoptPet = (id) => {
    // TODO: figure out what the spread operator is
    // doing here
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });

    // let petsToAdopt = this.state.pets.map(pet => {
    //   if (pet.id === id) {
    //     pet.isAdopted = true
    //   }
    // })
    // this.setState({Object.assign({},this.state, {
    //   pets: petsToAdopt
    // })})

    // petToAdopt.setState({
    //   isAdopted: true
    // })
    // console.log(petToAdopt)
    // console.log(petToAdopt)
    // console.log(event.target)
  }

  onChangeType = (event) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: event.target.value
    })
  })
}

  onFindPetsClick = () => {
    let intermediateArray = []
    let searchParameter = ''

    if (this.state.filters.type !== 'all') {
      searchParameter = `?type=${this.state.filters.type.toLowerCase()}`
    }

    let helperPromise = new Promise((resolve) => {
      fetch(`/api/pets${searchParameter}`)
      .then(res => res.json())
      .then(obj => intermediateArray = obj)
      .then(resolve)
    })

    helperPromise
    .then(() => {
      this.setState({
        pets: intermediateArray
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
