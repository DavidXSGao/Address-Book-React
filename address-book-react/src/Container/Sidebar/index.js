import React, { Component } from 'react';
import Nav from '../../Component/Nav';

import './Section.css';

class Sidebar extends Component {
  render() {
    return (
      <section className="section">
        <Nav/ >
      </section>
    );
  }
}

export default Sidebar;