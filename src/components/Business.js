import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/business.css'

class Business extends Component {
  render() {
    const { userEvents, usersEvents, allEvents, businessEvents, businesses, presentPage, fetchUsers, currentBusiness, currentUser, highlight, setHighlight, updateCurrentBusiness } = this.props

    return (
      <div>
        <div className='user-container'>
          <h1>{currentBusiness.name}</h1>
          <UpcomingEvents fetchUsers={fetchUsers} presentPage={presentPage} userEvents={userEvents} usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} currentBusiness={currentBusiness} currentUser={currentUser} setHighlight={setHighlight} highlight={highlight} updateCurrentBusiness={updateCurrentBusiness} />
        </div>
        <div>
          {Object.keys(highlight).length === 0 ? null : <HighlightedEvent highlight={highlight} />}
        </div>
      </div>
    );
  }
}

export default Business;
