import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }
  handleMenuClick(event) {}
  render() {
    return (
      <div className="drawer-container">
        <div className="drawer-content-container">
          <h1 className="title">Menu</h1>
          <hr className="separator"/>
          <div className="menu">
            <ul className="nav">
              <li>Home</li>
              <li>About</li>
              <li>Links</li>
              <li>Contact</li>
              <li>Forum</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
