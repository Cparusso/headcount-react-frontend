import React, { Component } from 'react'
import uncommitted from '../images/uncommitted.svg'
import committed from '../images/committed.svg'
import { NavLink } from 'react-router-dom'
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
    .then(resp => resp.json())
    .then(newEvent => this.props.fetchUsers())
  }

  checkCommitment = (eventInfo, usersEvents) => {
    // debugger
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
    console.log(usersEvents)

    return (
      <div className='event'>
        <NavLink className='navlink' to='/business'>
          <h2 className='business-link' >{businessInfo.name}</h2>
        </NavLink>
        <h2>{eventInfo.title}</h2>
        <h3>{eventInfo.about}</h3>
        {usersEvents ? this.checkCommitment(eventInfo, usersEvents): <img className='commitment-image' onClick={() => this.commitToEvent(eventInfo)} src={uncommitted} alt={'uncommitted-icon'} />}
      </div>
    );
  }
}

export default Event
