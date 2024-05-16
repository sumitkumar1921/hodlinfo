import React from "react";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">HODLINFO</div>
      <div className="currency">
        <div>
          <select className="navbar-dropdown" id="dropdown" >
            <option value="option1">INR </option>
          </select>
        </div>
        <div>
          <select className="navbar-dropdown" id="dropdown" >
            <option value="option1">BTC </option>
            <option value="option1">ETH </option>
            <option value="option1">BTC </option>
            <option value="option1">BTC </option>
            <option value="option1">BTC </option>
            <option value="option1">BTC </option>
          </select>
        </div>
        <div>
            <button className="buy-btc">BUY BTC</button>
        </div>
      </div>
      <div className="nav-button">
        <button>Connect Telegram</button>
      </div>
    </div>
  );
}

export default Navbar;
