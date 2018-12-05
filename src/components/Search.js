import React, { Component } from 'react'
import EventMap from './EventMap'
import NewEventMap from './NewEventMap'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/search.css'

class Search extends Component {

  render() {
    // will need to send the selected event's info down to the HighlightedEvent - it should initially load the next event that is happening in the area
    const { currentUser, userEvents, allEvents, businessEvents, businesses, presentPage, usersEvents, fetchUsers, jwt, updateCurrentBusiness, setHighlight, highlight } = this.props

    return (

      <div>
        <div className='event-section'>
          <NewEventMap businesses={businesses} />
          <UpcomingEvents updateCurrentBusiness={updateCurrentBusiness} currentUser={currentUser} jwt={jwt} fetchUsers={fetchUsers} usersEvents={usersEvents} presentPage={presentPage} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} setHighlight={setHighlight} highlight={highlight} />
        </div>
        {highlight ? <HighlightedEvent highlight={highlight}/> : null}
      </div>
    )
  }
}

export default Search
