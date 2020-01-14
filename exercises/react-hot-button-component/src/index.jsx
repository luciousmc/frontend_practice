import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      '3': 'purple',
      '6': 'violet',
      '9': 'red',
      '12': 'orange',
      '15': 'white'
    };
    this.clicks = 0;
  }
  render() {
    return (
      <div id="hot-button">
        <p>Clicks: {this.clicks}</p>
        <p>Color: {this.state[toString(this.clicks)]}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <HotButton />,
  document.getElementById('root')
);
