import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState(state => ({
      istoggledOn: !state.isToggledOn
    }));
  }
  render() {
    if (this.state.isToggledOn === false) {
      return (
        <div className="switch-container" onClick={this.handleClick}>
          <div id="switch" className="off"></div>
        </div>
      );
    }
    return (
      <div className="switch-container" onClick={this.handleClick}>
        <div id="switch" className="on"></div>
      </div>
    );
  }
}

export default ToggleSwitch;
