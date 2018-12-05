import React, { Component } from 'react'
import './styles/highlighted-event.css'

class HighlightedEvent extends Component {
  render() {
    const { highlight } = this.props

    return (
      <div className='highlight-section'>
        <p>{highlight.title}</p>
        <p>{highlight.about}</p>
        <p>{highlight.date}</p>
        <p>{highlight.time}</p>
      </div>
    )
  }
}

export default HighlightedEvent
