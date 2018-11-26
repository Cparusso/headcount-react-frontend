import React, { Component } from 'react'
import uncommitted from '../images/uncommitted.svg'
import './styles/event.css'

class Event extends Component {

  render() {
    const { eventInfo } = this.props
    debugger
    return (
      <div>
        <h2>{eventInfo[0].title}</h2>
        <h3>{eventInfo[0].about}</h3>
        <img src={uncommitted} alt='uncommitted-icon' />
      </div>
    );
  }
}

export default Event
