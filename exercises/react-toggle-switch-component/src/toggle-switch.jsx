import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggledOn: !state.isToggledOn
    }));
  }
  render() {
    let status = this.state.isToggledOn === false ? 'OFF' : 'ON';
    if (this.state.isToggledOn === false) {
      return (
        <div className="switch-container off" onClick={this.handleClick}>
          <div id="switch">
            <h2>{status}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="switch-container on" onClick={this.handleClick}>
          <div id="switch">
            <h2>{status}</h2>
          </div>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
