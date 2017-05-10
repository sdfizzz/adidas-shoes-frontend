import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header-block">
        <div className="header-left-block">
          <h1>ULTRA<br />BOOST</h1>
          <button className="button-save">SAVE</button>
        </div>
        <div className="header-right-block">
          <div className="header-right-block-labels">
            <button className="label-dark-gray" />
            <button className="label-blue" />
            <button className="label-black" />
            <button className="label-gray" />
            <span className="label-sale">SALE</span>
          </div>
          <h2>$170</h2>
        </div>
      </header>
    );
  }
}

export default Header;
