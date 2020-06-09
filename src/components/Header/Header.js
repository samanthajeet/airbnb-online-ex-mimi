import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-intro">
        <h2>INTRODUCING</h2>
        <h1 style={{fontSize: 48}}>Online</h1>
        <h1 style={{fontSize: 48}}>Experiences</h1>
        <br/>
        <p style={{fontSize: 16}}>Unique activities we can do together, led by</p>
        <p style={{fontSize: 16}}>a world of hosts</p>
      </div>
    </div>
  );
};

export default Header;
