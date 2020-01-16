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
    let switchElem = document.getElementsByClassName('switch');
    // eslint-disable-next-line no-console
    console.log('the classlist is : ', switchElem[0].classList);
  }
  render() {
    return (
      <div className="switch-container" onClick={this.handleClick}>
        <div className="switch off"></div>
      </div>
    );
  }
}

export default ToggleSwitch;
