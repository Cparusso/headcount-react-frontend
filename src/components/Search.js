import React, { Component } from 'react'
import EventMap from './EventMap'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/search.css'

class Search extends Component {
  render() {
    // will need to send the selected event's info down to the HighlightedEvent - it should initially load the next event that is happening in the area

    return (
      <div>
        <div className='event-section'>
          <EventMap />
          <UpcomingEvents />
        </div>
        <HighlightedEvent />
      </div>
    )
  }
}

export default Search
