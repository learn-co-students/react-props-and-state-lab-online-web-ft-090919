import React from 'react'

class Filters extends React.Component {

  handleSelect = (event) =>{
    let animalType = event.target.value
    this.props.onChangeType(animalType)
  }

  handleClick = (event) => {
    this.props.onFindPetsClick(event)
  }


  render() {
    // console.log(this.props.onChangeType)
    
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
