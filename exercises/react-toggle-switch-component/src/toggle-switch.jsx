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
    let status = this.state.isToggledOn === false ? 'off' : 'on';
    return (
      <div className={`switch-container ${status}`} onClick={this.handleClick}>
        <div id="switch">
          <h2>{status.toUpperCase()}</h2>
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;
