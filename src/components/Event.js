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
            'Authorization': `Bearer ${this.props.jwt}`
        },
      body: JSON.stringify({
        user_id: this.props.currentUser.id,
        event_id: eventInfo.id
      })
    })
    .then(resp => resp.json())
    .then(newEvent => this.props.fetchUsers(this.props.currentUser))
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
    const { eventInfo, businessInfo, usersEvents, setHighlight, currentUser, updateCurrentBusiness } = this.props

    return (
      <div className='event'>
        <div className='event-info-container'>
          <NavLink className='navlink' to='/business'>
            <h2 onClick={() => updateCurrentBusiness(businessInfo)} className='business-link' >{businessInfo.name}</h2>
          </NavLink>
          <h4 onClick={() => setHighlight(eventInfo)} className='event-title'>{eventInfo.title}</h4>
          <div className='event-info-section'>
            <p>{eventInfo.about.length < 100 ? eventInfo.about : `${eventInfo.about.slice(0, 100)}...`}</p>
          </div>
        </div>
        <div className='time-and-commit'>
          <p>{eventInfo.time} <br></br> {eventInfo.date}</p>
          {usersEvents ? this.checkCommitment(eventInfo, usersEvents) : <img className='commitment-image' onClick={() => this.commitToEvent(eventInfo)} src={uncommitted} alt={'uncommitted-icon'} />}
        </div>
      </div>
    );
  }
}

export default Event
