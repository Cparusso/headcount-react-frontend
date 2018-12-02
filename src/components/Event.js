import React, { Component } from 'react'
import uncommitted from '../images/uncommitted.svg'
import committed from '../images/committed.svg'
import { NavLink } from 'react-router-dom'
import './styles/event.css'

class Event extends Component {
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
    .then(resp => resp.json())
    .then(newEvent => this.props.fetchUsers())
  }

  checkCommitment = (eventInfo, usersEvents) => {
    if (usersEvents.find(event => event.id === eventInfo.id)) {
      return (
        <img className='commitment-image' src={committed} alt={'committed-icon'} />
      )
    } else {
      return (
        <img className='commitment-image' onClick={() => this.commitToEvent(eventInfo)} src={uncommitted} alt={'uncommitted-icon'} />
      )
    }
  }

  render() {

    const { eventInfo, businessInfo, usersEvents } = this.props

    return (
      <div className='event'>
        <NavLink className='navlink' to='/business'>
          <h2 className='business-link' >{businessInfo.name}</h2>
        </NavLink>
        <h4 className='event-title'>{eventInfo.title}</h4>
        <div className='event-info-section'>
          <p>{eventInfo.about}</p>
          <div className='time-and-commit'>
            <p>3:00</p>
            {usersEvents ? this.checkCommitment(eventInfo, usersEvents): <img className='commitment-image' onClick={() => this.commitToEvent(eventInfo)} src={uncommitted} alt={'uncommitted-icon'} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Event
