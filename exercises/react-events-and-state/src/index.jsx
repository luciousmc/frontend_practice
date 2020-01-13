import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState(
      {
        isClicked: !this.state.isClicked
      }
    );
  }
  render() {
    let buttonText = this.state.isClicked === false ? 'Click Me' : 'Thanks';

    return (
      <button onClick={this.handleClick}>{buttonText}</button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
