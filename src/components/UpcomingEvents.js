import React, { Component } from 'react';
import './styles/upcoming-events.css'
import Event from './Event'

let currentBusinesses = []

class UpcomingEvents extends Component {
  // Iterate through all the businesses. For each of them create an array of businessEvents that are associated with the business.
  getBusinessEventsGroupedByBusiness = (businessesArr) => {
    return businessesArr.map(business => {
      return this.props.businessEvents.filter(businessEvent => {
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
        return this.props.allEvents.filter(upcomingEvent => {
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
    let currentBusinessEvent = this.props.businessEvents.filter(businessEvent => {
      if (businessEvent.event_id === currentEvent.id) {
        return businessEvent
      }
    })

    return this.props.businesses.filter(business => {
      if (currentBusinessEvent[0].business_id === business.id) {
        return business
      }
    })
  }

  findUsersEvents = (currentUsersUserEvents) => {
    return currentUsersUserEvents.map(userEvent => {
      return this.props.allEvents.find(currentEvent => {
        if (currentEvent.id === userEvent.event_id) {
          return currentEvent
        }
      })
    })
  }

  findBusinessesEvents = (currentBusinessesBusinessEvents) => {
    return currentBusinessesBusinessEvents.map(businessEvent => {
      return this.props.allEvents.find(currentEvent => {
        if (currentEvent.id === businessEvent.event_id) {
          return currentEvent
        }
      })
    })
  }

  renderEvents = (presentPage) => {
    let businessEventsGroupedByBusiness = this.getBusinessEventsGroupedByBusiness(this.props.businesses)
    let eventsGroupedByBusiness = this.getEventsGroupedByBusiness(businessEventsGroupedByBusiness)

    switch(presentPage) {
      case 'search':
        let oneEventPerBusiness = this.narrowDownEventsList(eventsGroupedByBusiness)

        return (oneEventPerBusiness.map(businessEvent => {
          let currentBusinessInfo = this.findBusinessInfo(businessEvent)
          return (<Event fetchUsers={this.props.fetchUsers} eventInfo={businessEvent} usersEvents={this.props.usersEvents} businessInfo={currentBusinessInfo[0]} />)
        }))

        break;
      case 'user':
        return (this.props.usersEvents.map(usersEvent => {
          let currentBusinessInfo = this.findBusinessInfo(usersEvent)
          return (<Event fetchUsers={this.props.fetchUsers} eventInfo={usersEvent} usersEvents={this.props.usersEvents} businessInfo={currentBusinessInfo[0]} />)
        }))

        break;
        case 'business':
        let currentBusinessesBusinessEvents = this.props.businessEvents.filter(businessEvent => businessEvent.business_id === 1)
        let currentBusinessesEvents = this.findBusinessesEvents(currentBusinessesBusinessEvents)

        return (currentBusinessesEvents.map(businessEvent => {
          let currentBusinessInfo = this.findBusinessInfo(businessEvent)
          return (<Event fetchUsers={this.props.fetchUsers} eventInfo={businessEvent} usersEvents={this.props.usersEvents} businessInfo={currentBusinessInfo[0]} />)
        }))

          break;
      default:
        console.log('default case')
        break;
    }
  }

  render() {
    const { userEvents, allEvents, businessEvents, businesses, presentPage, usersEvents,  fetchUsers } = this.props

    return (
      <div id='event-container'>
        <h1>Upcoming Events</h1>
        <div id='events'>
          { !usersEvents.length > 0 || !businesses.length > 0 || !allEvents.length > 0 || !businessEvents.length > 0 ? null : this.renderEvents(presentPage) }
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
