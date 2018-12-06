import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/user.css'

class User extends Component {
  render() {
    const { userEvents, usersEvents, allEvents, businessEvents, businesses, presentPage, fetchUsers, highlight, setHighlight, currentUser, updateCurrentBusiness } = this.props

    return (
      <div>
        <div className='user-container'>
          <div className='about-section'>
            <div className='about-container'>
              <img className='about-container-img' src={currentUser.imageUrl} alt='user-image'/>
              <h1>{currentUser.name}</h1>
              <p>{currentUser.bio}</p>
            </div>
          </div>
          <UpcomingEvents fetchUsers={fetchUsers} presentPage={presentPage} userEvents={userEvents}  usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} setHighlight={setHighlight} highlight={highlight} updateCurrentBusiness={updateCurrentBusiness} />
        </div>
        <div>
          {Object.keys(highlight).length === 0 ? null : <HighlightedEvent highlight={highlight} />}
        </div>
      </div>
    );
  }
}

export default User;
