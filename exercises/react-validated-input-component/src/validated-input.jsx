import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handlePasschange = this.handlePasschange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handlePasschange(event) {
    this.setState({ input: event.target.value });
    // eslint-disable-next-line no-console
    console.log('the state is: ', this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('the event object is: ', event);

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" onChange={this.handlePasschange} value={this.state.input} />
        <input type="submit" />
      </form>
    );
  }
}

export default ValidatedInput;
