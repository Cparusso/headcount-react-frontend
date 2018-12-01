import React, { Component } from 'react'
import EventMap from './EventMap'
import NewEventMap from './NewEventMap'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/search.css'

class Search extends Component {
  render() {
    // will need to send the selected event's info down to the HighlightedEvent - it should initially load the next event that is happening in the area
    const { userEvents, allEvents, businessEvents, businesses, presentPage, usersEvents, fetchUsers } = this.props

    return (

      <div>
        <div className='event-section'>
          <NewEventMap />
          <UpcomingEvents fetchUsers={fetchUsers} usersEvents={usersEvents} presentPage={presentPage} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} />
        </div>
        <HighlightedEvent />
      </div>
    )
  }
}

export default Search
