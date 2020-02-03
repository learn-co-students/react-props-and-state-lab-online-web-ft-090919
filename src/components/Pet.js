import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
            {/* PET NAME */}
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
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">sorry bud this pupper is snatched up</button>
          ):(
            <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">this one is not tho</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
