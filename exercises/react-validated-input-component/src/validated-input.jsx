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
    let usrInput = this.state.input;
    let regex = /[0-9]/;

    // Error when user hasn't  input anything
    if (!usrInput) {
      this.setState({ errMsg: 'A passsword is required to enter' });

    // ERROR when user inputs less than 8 characters
    } else if (usrInput.length < 8) {
      this.setState({ errMsg: 'Please enter at least 8 characters' });

    // ERROR: User must enter at least 1 number
    } else if (!regex.test(usrInput)) {
      this.setState({ errMsg: 'Please use at least 1 number in the password' });

    // If everything passes clear any error messages there may be
    } else {
      this.setState({ errMsg: '' });
    }
  }
  render() {
    let errClass, iconClass, passFail;

    // If there is an error message set, Set classes to display content when check fails
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
