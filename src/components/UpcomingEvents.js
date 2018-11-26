import React, { Component } from 'react';
import './styles/upcoming-events.css'
import Event from './Event'

class UpcomingEvents extends Component {
  state = {
    upcomingEvents: [],
    businessEvents: [],
    businesses: [],
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

    fetch('http://localhost:4000/businesses')
    .then(resp => resp.json())
    .then(eventsJSON => {
      this.setState({
        businesses: eventsJSON
      })
    })
  }

  // renderEvents = () => {
  //   return this.state.businesses.map(business => {
  //     return this.state.businessEvents.forEach(businessEvent => {
  //       if (business.id === businessEvent.business_id) {
  //         return this.state.upcomingEvents.forEach(upcomingEvent => {
  //           if (upcomingEvent.id === businessEvent.event_id) {
  //             console.log(upcomingEvent);
  //             // debugger
  //             return <Event key={upcomingEvent.title} eventInfo={upcomingEvent} />
  //           }
  //         })
  //       }
  //     })
  //   })
  // }

  renderEvents = () => {
    let test = this.state.businesses.map(business => {
      return this.state.businessEvents.filter(businessEvent => {
        if (businessEvent.business_id === business.id){
          return businessEvent
        }
      })
    })

    let test2 = test.map(business => {
      return business.map(businessEvent => {
        return this.state.upcomingEvents.filter(upcomingEvent => {
          if(upcomingEvent.id === businessEvent.event_id){
            return upcomingEvent
          }
        })
      })
    })

    return (test2.map(bizz => {
        return(
          <Event eventInfo = {bizz[0]}/>
        )
      })
    )
  }

  render() {
    const { upcomingEvents, businessEvents, businesses } = this.state
    return (
      <div id='event-container'>
        <h1>Upcoming Events</h1>
        <div id='events'>
          {businesses ? this.renderEvents() : null}
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
