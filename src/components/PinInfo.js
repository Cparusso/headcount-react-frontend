import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {popupInfo} = this.props;

    return (
      <div>
        <div>
          <h1>{popupInfo.name}</h1>
          <p>{popupInfo.about.slice(0, 50)}-</p>
          <p>{popupInfo.about.slice(50, 100)}-</p>
          <p>{popupInfo.about.slice(100, 150)}...</p>
        </div>
      </div>
    );
  }
}
