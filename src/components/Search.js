import React, { Component } from 'react'
import UpcomingEvents from './UpcomingEvents'
import EventMap from './EventMap'
import './styles/search.css'

class Search extends Component {
  render() {
    return (
      <div>
        <div className='event-section'>
          <EventMap />
          <UpcomingEvents />
        </div>
      </div>
    );
  }
}

export default Search;
