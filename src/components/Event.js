import React, { Component } from 'react'
import uncommitted from '../images/uncommitted.svg'
import './styles/event.css'

class Event extends Component {

  render() {
    const { eventInfo } = this.props
    // BusinessEvent.first.business.name
    return (
      <div>
        <h2>{eventInfo.title}</h2>
        <h3>{eventInfo.about}</h3>
        <img src={uncommitted} alt='uncommitted-icon' />
      </div>
    );
  }
}

export default Event
