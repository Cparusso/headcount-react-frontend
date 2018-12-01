import React, { Component } from 'react'
import pin from '../images/hc-icon.svg'
import './styles/event-map.css'

import ReactMapGL, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY3BhcnVzc28iLCJhIjoiY2pwNDdhemRyMHBydDNxb2I1bDZmOGluaSJ9.tYgLgMl_fhlITquXLQttyQ';

class NewEventMap extends Component {
  state = {
    viewport: {
      width: 760,
      height: 480,
      latitude: 40.7051073,
      longitude: -74.01419609999999,
      zoom: 15
    }
  };

  dropPins = () => {
    return (<Marker latitude={40.7051073} longitude={-74.01419609999999} offsetLeft={0} offsetTop={-50}>
      <img src={pin} />
    </Marker>)
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          className='map'
          mapStyle={'mapbox://styles/cparusso/cjp4e4ko40uu42smo9wuwsx1h'}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={(viewport) => this.setState({viewport})}>
          {this.dropPins()}
        </ReactMapGL>
      </div>
    );
  }
}

export default NewEventMap;
