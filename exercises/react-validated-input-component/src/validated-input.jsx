import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      errMsg: ''
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

    if (this.state.input.length < 8) {
      this.setState({ errMsg: 'Please enter at least 8 characters' });
    }
  }
  render() {
    let errClass, iconClass, passFail;

    if (this.state.errMsg) {
      errClass = 'err';
      iconClass = 'fa-times';
      passFail = 'fail';
    } else {
      errClass = 'no-err';
      iconClass = 'fa-check';
      passFail = 'pass';
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" onChange={this.handlePasschange} value={this.state.input} />
        <input type="submit" />
        <span className={`icon ${passFail}`}><i className={`fas ${iconClass}`}></i></span>
        <div className={`error-msg ${errClass}`}>{this.state.errMsg}</div>
      </form>
    );
  }
}

export default ValidatedInput;
