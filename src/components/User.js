import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/user.css'

class User extends Component {
  render() {
    const { userEvents, usersEvents, allEvents, businessEvents, businesses, presentPage, fetchUsers, highlight, setHighlight } = this.props

    return (
      <div>
        <div className='user-container'>
          <h1>Charlie</h1>
          <UpcomingEvents fetchUsers={fetchUsers} presentPage={presentPage} userEvents={userEvents}  usersEvents={usersEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} setHighlight={setHighlight} highlight={highlight}/>
        </div>
        <div>
          {Object.keys(highlight).length === 0 ? null : <HighlightedEvent highlight={highlight} />}
        </div>
      </div>
    );
  }
}

export default User;
