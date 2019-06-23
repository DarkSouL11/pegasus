import React, { Component } from "react";
import "./styles.scss";

export default class twolevelDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
    this.openDropDown = this.openDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
  }
  openDropDown() {
    this.setState({
      isDropdownOpen: true
    });
  }
  closeDropDown() {
    this.setState({
      isDropdownOpen: false
    });
  }

  render() {
    if (this.state.isDropdownOpen) {
      document.addEventListener("click", this.closeDropDown);
    } else if (!this.state.isDropdownOpen) {
      document.removeEventListener("click", this.closeDropDown);
    }
    var names = this.props.data.data.children;
    //debugger;
    var namesList = Object.entries(names).map(([key, value]) => {
      return (
        <li key={key}>
          <a href={value.href}>{value.name}</a>
        </li>
      );
    });
    console.log(this.props);
    return (
      <div>
        <span className="dropdown">
          <button className="dropdown-btn" onClick={this.openDropDown}>
            {this.props.data.data.name}
          </button>
          {this.state.isDropdownOpen && (
            <ul className="dropdown-items">{namesList}</ul>
          )}
        </span>
      </div>
    );
  }
}
