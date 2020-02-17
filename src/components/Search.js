import React, { Component } from 'react'
import EventMap from './EventMap'
import NewEventMap from './NewEventMap'
import UpcomingEvents from './UpcomingEvents'
import HighlightedEvent from './HighlightedEvent'
import './styles/search.css'

let oneBusinessPerEvent = []

class Search extends Component {

  getBusinessEventsGroupedByBusiness = (businessesArr) => {
    return businessesArr.map(business => {
      return this.props.businessEvents.filter(businessEvent => {
        if (businessEvent.business_id === business.id){
          if (!oneBusinessPerEvent.includes(business)) {
            oneBusinessPerEvent.push(business)
          }
          return businessEvent
        }
      })
    })
  }

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

  getOneEventPerBusiness = () => {
    let businessEventsGroupedByBusiness = this.getBusinessEventsGroupedByBusiness(this.props.businesses)
    let eventsGroupedByBusiness = this.getEventsGroupedByBusiness(businessEventsGroupedByBusiness)
    oneBusinessPerEvent = this.narrowDownEventsList(eventsGroupedByBusiness)
  }

  render() {
    // will need to send the selected event's info down to the HighlightedEvent - it should initially load the next event that is happening in the area
    const { currentUser, userEvents, allEvents, businessEvents, businesses, presentPage, usersEvents, fetchUsers, jwt, updateCurrentBusiness, setHighlight, highlight } = this.props

    this.getOneEventPerBusiness()

    return (

      <div>
        <div className='event-section'>
          <UpcomingEvents updateCurrentBusiness={updateCurrentBusiness} currentUser={currentUser} jwt={jwt} fetchUsers={fetchUsers} usersEvents={usersEvents} presentPage={presentPage} userEvents={userEvents} allEvents={allEvents} businessEvents={businessEvents} businesses={businesses} setHighlight={setHighlight} highlight={highlight} />
          <NewEventMap businesses={businesses} oneBusinessPerEvent={oneBusinessPerEvent} />
        </div>
        {Object.keys(highlight).length === 0 ? null : <HighlightedEvent highlight={highlight}/>}

      </div>
    )
  }
}

export default Search
