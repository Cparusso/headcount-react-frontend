import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import './styles/business.css'

class Business extends Component {
  render() {
    const { userEvents, usersEvents, allEvents, businessEvents, businesses, presentPage, fetchUsers, currentBusiness, currentUser } = this.props

    return (
      <div className='user-container'>
        <h1>{currentBusiness.name}</h1>
        <UpcomingEvents fetchUsers={fetchUsers} presentPage={presentPage} userEvents={userEvents} usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} currentBusiness={currentBusiness} currentUser={currentUser} />
      </div>
    );
  }
}

export default Business;
