import React, { Component } from 'react';
import './styles/mission-section.css'
import childrensHosiptal from '../images/childrens-hospital.jpg'
import animalShelter from '../images/animal-shelter.jpg'

class MissionSection extends Component {
  render() {
    return (
      <div className='section-container'>
        <div className='blurb'>
          <div className='image'>
            <img src={childrensHosiptal}/>
          </div>
          <div className='content'>
            <h2>Business Focus Header</h2>
            <p>Something about helping non-profit organizations and other do-good businesses get better turnout at their volunteer events.</p>
          </div>
        </div>
        <div className='blurb'>
          <div className='image'>
            <img src={animalShelter}/>
          </div>
          <div className='content'>
            <h2>User Focus Header</h2>
            <p>Something about helping users to help others by giving them a clear view of all the upcoming events in their area.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionSection;
