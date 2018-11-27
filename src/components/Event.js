import React, { Component } from 'react'
import uncommitted from '../images/uncommitted.svg'
import './styles/event.css'

class Event extends Component {
  state = {
    committed: false
  }

  commitToEvent = (eventInfo) => {
    fetch('http://localhost:4000/user_events', {
      method: "POST",
      headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
      body: JSON.stringify({
        user_id: 1,
        event_id: eventInfo.id
      })
    })
  }

  render() {
    const { eventInfo, businessInfo } = this.props

    return (
      <div className='event'>
        <h2>{businessInfo.name}</h2>
        <h2>{eventInfo.title}</h2>
        <h3>{eventInfo.about}</h3>
        <img onClick={() => this.commitToEvent(eventInfo)} src={uncommitted} alt='uncommitted-icon' />
      </div>
    );
  }
}

export default Event
