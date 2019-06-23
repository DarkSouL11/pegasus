import React from "react";

import Greet from "./my-components/dropdown-component/dropdown-comp";
import Dropdown from "./my-components/dropdown-component2/dropdown-comp2";
import Carousel from "./my-components/carousel/carousel-comp";

import "./App.css";

function App() {
  const dropdownComponent = {
    data: {
      name: "Wild Animals",
      children: [
        {
          name: "Tiger",
          href: "#1"
        },
        {
          name: "Lion",
          href: "#2"
        },
        {
          name: "Bear",
          href: "#3"
        },
        {
          name: "Jaguar",
          href: "#4"
        }
      ]
    },
    config: {
      _backgroundColor: "black"
    }
  };
  const mld = [
    {
      title: "Option 1",
      submenu: null
    },
    {
      title: "Option 2",
      submenu: [
        {
          title: "Option 2.1",
          submenu: [
            {
              title: "Option 2.1.1",
              submenu: null
            },
            {
              title: "Option 2.1.2",
              submenu: null
            }
          ]
        },
        {
          title: "Option 2.2",
          submenu: [
            {
              title: "Option 2.2.1",
              submenu: null
            },
            {
              title: "Option 2.2.2",
              submenu: null
            }
          ]
        }
      ]
    }
  ];
  const carouselData = [
    {
      image: "https://via.placeholder.com/700",
      caption: "1 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "2 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "3 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "4 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "5 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "6 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "7 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "8 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "9 / 10"
    },
    {
      image: "https://via.placeholder.com/700",
      caption: "10 / 10"
    }
  ];

  return (
    <div className="App">
      {/* <Greet data={dropdownComponent} /> */}
      <Dropdown title="Dropdown With label content" data={mld} />
      {/* <Carousel data={carouselData} /> */}
    </div>
  );
}

export default App;
