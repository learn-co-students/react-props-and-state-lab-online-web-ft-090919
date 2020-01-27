import React from 'react'

class Pet extends React.Component {
  petGender = () => {
    if (this.props.pet.gender === "male") {
      return '♂'
    } else {
      return '♀'
    }
  }

  isAdopted = () => {
    let pet = this.props.pet
    if (pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" >Adopt pet</button>
    }
  }
  
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.petGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
            {this.isAdopted()}

        </div>
      </div>
    )
  }
}

export default Pet
