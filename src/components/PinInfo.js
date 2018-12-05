import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

  render() {
    const {popupInfo} = this.props;

    return (
      <div>
        <div>
          <h1>{popupInfo.name}</h1>
          <h4>{popupInfo.about}</h4>
        </div>
      </div>
    );
  }
}
