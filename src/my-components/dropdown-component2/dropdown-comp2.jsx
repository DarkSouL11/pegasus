import React, { Component } from "react";
import "./styles.scss";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log("event is  ", e);
    if (e.submenu != null && e.submenu.length > 0) {
      e.submenu.map((e, i) => {
        return (
          <li onClick={() => this.handleClick(e, i)} key={i}>
            {e.title}
          </li>
        );
      });
    }
  }
  render() {
    let data = this.props.data;
    console.log(data);
    var items = data.map((e, i) => {
      console.log("items are", e);
      return (
        <li onClick={() => this.handleClick(e)} key={i}>
          {e.title}
        </li>
      );
    });

    return <ul>{items}</ul>;
  }
}
