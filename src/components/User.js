import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import './styles/user.css'

class User extends Component {
  render() {
    const { userEvents, allEvents, businessEvents, businesses, presentPage } = this.props

    return (
      <div className='user-container'>
        <h1>Charlie</h1>
        <UpcomingEvents presentPage={presentPage} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />
      </div>
    );
  }
}

export default User;
