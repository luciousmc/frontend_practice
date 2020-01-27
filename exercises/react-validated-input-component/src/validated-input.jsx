import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    };
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password: </label>
        <input type="text" name="password" />
      </form>
    );
  }
}

export default ValidatedInput;
