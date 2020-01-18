import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleScreenClick = this.handleScreenClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  handleMenuClick() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }
  handleScreenClick() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }
  handleLinkClick(event) {
    this.handleMenuClick();
  }
  render() {
    let menuOpen = this.state.isMenuOpen ? 'open' : 'closed';
    let screen = this.state.isMenuOpen ? 'show' : 'hidden';
    return (
      <React.Fragment>
        <span className="menu-icon">
          <i className="fas fa-bars" onClick={this.handleMenuClick}></i>
        </span>
        <div className={`drawer-container ${screen}`} onClick={this.handleScreenClick}></div>
        <div className={`drawer-content-container ${menuOpen}`}>
          <h1 className="title">Menu</h1>
          <hr className="separator"/>
          <div className="menu">
            <ul className="nav" onClick={this.handleLinkClick}>
              <li>Home</li>
              <li>About</li>
              <li>Links</li>
              <li>Contact</li>
              <li>Forum</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppDrawer;
