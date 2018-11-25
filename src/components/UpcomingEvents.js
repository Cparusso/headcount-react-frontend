import React, { Component } from 'react';
import './styles/upcoming-events.css'
import Event from './Event'

class UpcomingEvents extends Component {
  state = {
    upcomingEvents: [],
  }

  componentDidMount() {
    fetch('http://localhost:4000/events')
    .then(resp => resp.json())
    .then(eventsJSON => {
      this.setState({
        upcomingEvents: eventsJSON
      })
    })
  }

  renderEvents = () => {
    return this.state.upcomingEvents.map(singleEvent => {
      return <Event key={singleEvent.title} eventInfo={singleEvent}/>
    })
  }

  render() {
    console.log(this.state.upcomingEvents)

    return (
      <div id='event-container'>
        <h1>Upcoming Events</h1>
        <div id='events'>
          {this.renderEvents()}
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
