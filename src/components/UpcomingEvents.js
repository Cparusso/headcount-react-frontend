import React, { Component } from 'react';
import './styles/upcoming-events.css'
import Event from './Event'

let currentBusinesses = []

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

  // Iterate through all the businesses. For each of them create an array of businessEvents that are associated with the business.
  getBusinessEventsGroupedByBusiness = (businessesArr) => {
    return businessesArr.map(business => {
      return this.state.businessEvents.filter(businessEvent => {
        if (businessEvent.business_id === business.id){
          if (!currentBusinesses.includes(business)) {
            currentBusinesses.push(business)
          }
          return businessEvent
        }
      })
    })
  }

  // Iterate through this new collection of arrays. For each of them replace the businessEvent (join table) with the actual event.
  getEventsGroupedByBusiness = (businessEventsArr) => {
    return businessEventsArr.map(business => {
      return business.map(businessEvent => {
        return this.state.upcomingEvents.filter(upcomingEvent => {
          if(upcomingEvent.id === businessEvent.event_id) {
            return upcomingEvent
          }
        })
      })
    })
  }

  narrowDownEventsList = (eventsGroupedByBusiness) => {
    return eventsGroupedByBusiness.map(events => {
      return events = events[0][0]
    })
  }

  // iterate through the business events. for each business event check to see if the business_id is the same as the currentBusinessEvent that was passed down to this function.
  // If there is a match we need to go through all the businesses. For each business we will need to see if the id is the same as the business_id of the currentBusinessEvent that was passed down to this function.
  // If it is I want to return that business
  findBusinessInfo = (currentEvent) => {
    let currentBusinessEvent = this.state.businessEvents.filter(businessEvent => {
      if (businessEvent.event_id === currentEvent.id) {
        return businessEvent
      }
    })

    return this.state.businesses.filter(business => {
      if (currentBusinessEvent[0].business_id === business.id) {
        return business
      }
    })
  }

  renderEvents = () => {
    let businessEventsGroupedByBusiness = this.getBusinessEventsGroupedByBusiness(this.state.businesses)
    let eventsGroupedByBusiness = this.getEventsGroupedByBusiness(businessEventsGroupedByBusiness)
    let narrowedDownEventsList = this.narrowDownEventsList(eventsGroupedByBusiness)

    return (narrowedDownEventsList.map(businessEvent => {
      let currentBusinessInfo = this.findBusinessInfo(businessEvent)
      return (<Event eventInfo={businessEvent} businessInfo={currentBusinessInfo[0]} />)
    }))
  }

  render() {
    const { upcomingEvents, businessEvents, businesses } = this.state
    return (
      <div id='event-container'>
        <h1>Upcoming Events</h1>
        <div id='events'>
          { !businesses.length > 0 || !upcomingEvents.length > 0 || !businessEvents.length > 0 ? null : this.renderEvents() }
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
