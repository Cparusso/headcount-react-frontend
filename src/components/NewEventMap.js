import React, { Component } from 'react'
import Pin from './Pin';
import PinInfo from './PinInfo';

import pin from '../images/hc-icon.svg'
import loc from '../images/user-location.svg'

import './styles/event-map.css'

import ReactMapGL, { Popup, Marker } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3BhcnVzc28iLCJhIjoiY2pwNDdhemRyMHBydDNxb2I1bDZmOGluaSJ9.tYgLgMl_fhlITquXLQttyQ';

class NewEventMap extends Component {
  state = {
    viewport: {
      width: 760,
      height: 480,
      latitude: 40.7051073,
      longitude: -74.01419609999999,
      zoom: 15
    },
    popupInfo: null
  };

  renderBusinessMarker = (business) => {
    return (
      <Marker
        key={business.id}
        longitude={business.longitude}
        latitude={business.latitude} >
        <Pin size={30} onClick={() => this.setState({popupInfo: business})} />
      </Marker>
    );
  }

  renderPopup = () => {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        latitude={popupInfo.latitude}
        longitude={popupInfo.longitude}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})} >
        <PinInfo popupInfo={popupInfo} />
      </Popup>
    )
  }


  render() {
    const { businesses } = this.props
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          className='map'
          mapStyle={'mapbox://styles/cparusso/cjp4e4ko40uu42smo9wuwsx1h'}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}>
          {businesses.map(this.renderBusinessMarker)}
          {this.renderPopup()}
        </ReactMapGL>
      </div>
    );
  }
}

export default NewEventMap;
