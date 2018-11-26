import React, { Component } from 'react';
import './styles/upcoming-events.css'
import Event from './Event'

class UpcomingEvents extends Component {
  state = {
    upcomingEvents: [],
    businessEvents: [],
  }

  componentDidMount() {
    fetch('http://localhost:4000/events')
    .then(resp => resp.json())
    .then(eventsJSON => {
      this.setState({
        upcomingEvents: eventsJSON
      })
    })

    fetch('http://localhost:4000/business_events')
    .then(resp => resp.json())
    .then(eventsJSON => {
      this.setState({
        businessEvents: eventsJSON
      })
    })
  }

  renderEvents = () => {
    return this.state.upcomingEvents.map(singleEvent => {
      return <Event key={singleEvent.title} eventInfo={singleEvent}/>
    })
  }

  render() {
    const { upcomingEvents, businessEvents } = this.state

    return (
      <div id='event-container'>
        <h1>Upcoming Events</h1>
        <div id='events'>
          {upcomingEvents && businessEvents ? this.renderEvents() : null}
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
