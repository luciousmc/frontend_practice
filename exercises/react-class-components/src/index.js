import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  render(props) {
    return (
      <button>{this.props.text}</button>
    );
  }
}

// function CustomButton(props) {
//   return (
//     <button>{ props.text }</button>
//   );
// }

const element = (
  <div>
    <CustomButton text="I"/>
    <CustomButton text="know"/>
    <CustomButton text="React!"/>
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
