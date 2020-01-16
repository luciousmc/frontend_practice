import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: false
    };
  }
  render() {
    return (
      <div className="switch-container">
        <div className="switch"></div>
      </div>
    );
  }
}

export default ToggleSwitch;
