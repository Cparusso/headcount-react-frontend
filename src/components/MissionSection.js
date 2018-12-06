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
            <img src={childrensHosiptal} alt='childrens-hospital'/>
          </div>
          <div className='content'>
            <h2>Business Focus Header</h2>
            <p>Our mission is to help provide better outreach for non-profit orginizations about the various volunteer-led events that they hold.</p>
          </div>
        </div>
        <div className='blurb'>
          <div className='image'>
            <img src={animalShelter} alt='animal-shelter'/>
          </div>
          <div className='content'>
            <h2>User Focus Header</h2>
            <p>This platform aims to help our members give back to their communities by showing them when and where their help is needed.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MissionSection;
