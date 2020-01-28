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
  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log('the state is: ', this.state);
  }
  handlePasschange(event) {
    this.setState({ input: event.target.value });
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
        <input type="text" name="password" onChange={this.handlePasschange} value={this.state.input} />
        <input type="submit" />
        <span className="icon"><i className="fas fa-check"></i></span>
      </form>

    );
  }
}

export default ValidatedInput;
