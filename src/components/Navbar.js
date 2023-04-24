import React from 'react';

function Navbar(props) {
  return (
    <nav className="navBar">
      <h2 className="is-size-3 has-text-weight-bold	">Hard Focus</h2>
      <ul>
        <li>Timer </li>
        <li>Focus</li>
        <li>Light</li>
      </ul>
      <button className="button is-info mt-3 br-3 contactButton">
        Contact Us
      </button>
    </nav>
  );
}

export default Navbar;
