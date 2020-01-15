import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      colors: ['white', 'purple', 'violet', 'red', 'orange', 'yellow']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  renderBgColor() {
    let value = Math.floor(this.state.clicks / 3);
    // eslint-disable-next-line no-console
    console.log('value is: ', value, 'clicks is: ', this.state.clicks);
    if (value === 6) {
      return this.state.colors[0];
    }
    return this.state.colors[value];
  }
  handleClick(event) {
    let value = this.state.clicks / 3;
    if (value === 6) {
      this.setState(state => ({
        clicks: 0
      }));
    }
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }
  render() {
    const bgClass = this.renderBgColor();
    return (
      <div id="hot-button" onClick={this.handleClick} className={bgClass}>
        <p>Clicks: {this.state.clicks}</p>
        <p>Color: {bgClass}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <HotButton />,
  document.getElementById('root')
);
