import React, { Component } from "react";
import "./styles.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    function drag() {
      var container = document.querySelector(".container");
      let isDown = false,
        startX,
        scrollLeft;
      //debugger;
      container.addEventListener("mousedown", e => {
        isDown = true;
        container.classList.add("active");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        console.log(startX);
      });
      container.addEventListener("mouseleave", () => {
        isDown = false;
        container.classList.remove("active");
      });
      container.addEventListener("mouseup", () => {
        isDown = false;
        container.classList.remove("active");
      });
      container.addEventListener("mousemove", e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;

        console.log({ x, startX });
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
      });
    }
    drag();
  }
  render() {
    // console.log(this.props);
    let data = [];

    let dataItems = this.props.data.forEach((e, i) =>
      data.push(
        <div className="slides" key={i}>
          <div className="image">
            <img src={e.image} />
          </div>
          <div className="caption">
            <p>{e.caption}</p>
          </div>
        </div>
      )
    );
    function carousel(bool) {
      var container = document.querySelector(".container");
      // var maxScrollLeft = element.scrollWidth - element.clientWidth;
      if (bool) {
        container.scrollLeft += 700; //Adjust the scrollLeft values accordingly
      } else {
        container.scrollLeft -= 700;
      }
    }
    return (
      <div className="wrapper">
        <a className="prev common-styles" onClick={() => carousel(0)}>
          &#10094;
        </a>
        <a className="next common-styles" onClick={() => carousel(1)}>
          &#10095;
        </a>
        <div className="container">{data}</div>
      </div>
    );
  }
}
export default Carousel;
