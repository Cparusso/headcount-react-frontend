import React, { Component } from 'react'
import './styles/highlighted-event.css'

class HighlightedEvent extends Component {
  render() {
    const { highlight } = this.props

    return (
      <div className='highlight-section'>
        <p className='title'>{highlight.title}</p>
        <p className='about'>{highlight.about}</p>
        <div className='date-time'>
          <p>{highlight.time} - {highlight.date}</p>
        </div>
      </div>
    )
  }
}

export default HighlightedEvent
