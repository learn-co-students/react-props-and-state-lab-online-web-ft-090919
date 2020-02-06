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

  // 1. OnChangeType: Set's the filter type from 'all' - 'dog/cat/micropig'
  onChangeType =(animalType) => {
    // console.log(animalType)
    this.setState({
      filters: {
        ...this.state.filters, type: animalType
      }
    })
  }

 //2. OnFindPetsClick: 
  onFindPetsClick = () =>{
    //first enpoint is set to the fetch enpoint of all animals
    let endpoint = '/api/pets'

    /*second we check if this.state.filters.type is NOT equal to 'all',
     which means it is equal to something else.If it is then we attack additional
     text to to enpoint which is /api/pets using th '+='  this allow us
     to extend out string to api/pets/?type=current state*/

    if(this.state.filters.type !== 'all'){

    endpoint += `?type=${this.state.filters.type}`
    }

    /*Third: we pass endpoint to our fetch because its string is the url. I will be passed
    globally is if doesnt meet the if statement condition or after ti changed it it does meet the
    condition.
     */
    fetch(endpoint)
    .then(resp => resp.json())
    .then(animalArray => this.setState(() => {
      return {pets: animalArray}
    }))
  
  }

  onAdoptPet = (id) =>{
    // console.log('id',id)
    // console.log('state pets',this.state.pets)
    let filteredPets = this.state.pets.filter((pet) =>{
      //console.log('filter pet',pet)
      if(pet.id === id ){
         const matchingPet = Object.assign(pet,{isAdopted: true})
    
        //  console.log('Matching Pets',matchingPet)
         
        return matchingPet


      }else 
        return pet

    }
   ) 

console.log('This is filteredPets',filteredPets);

    this.setState({
      pets: filteredPets
    })
    console.log('weird bug?',this.state)


  }

  render() {
    // console.log(this.state.pets)
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
