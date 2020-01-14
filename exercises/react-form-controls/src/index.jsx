/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('the name submitted was: ', this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          Email Address
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit!" />
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
