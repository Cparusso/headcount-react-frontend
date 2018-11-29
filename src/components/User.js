import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import './styles/user.css'

class User extends Component {
  render() {
    const { userEvents, usersEvents, allEvents, businessEvents, businesses, presentPage, fetchUsers } = this.props

    return (
      <div className='user-container'>
        <h1>Charlie</h1>
        <UpcomingEvents fetchUsers={fetchUsers} presentPage={presentPage} userEvents={userEvents}  usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />
      </div>
    );
  }
}

export default User;
