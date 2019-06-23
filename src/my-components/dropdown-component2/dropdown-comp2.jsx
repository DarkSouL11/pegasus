import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

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

    }
  }

  dropdownListUi() {
    const { data, isHoverable, isSubmenu } = this.props;
    return data.map((e, i) => {
      if (e.submenu && e.submenu.length > 0) {
          return (
            <Dropdown
              key={i}
              data={e.submenu}
              isHoverable={isHoverable}
              isSubmenu
              title={e.title}
            />
          );
      } else {
          return (
            <a key={i} className="btn">{e.title}</a>
          );
      }
    });
  }

  render() {
    const { title, isSubmenu } = this.props;
    return (
      <div className={classNames('dropdown', { 'is-submenu': isSubmenu })}>
        <div className="dropdown-trigger btn">
          {title}
        </div>
        <div className="dropdown-list">
          {this.dropdownListUi()}
        </div>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  isHoverable: true
};

Dropdown.propTypes = {
    data: PropTypes.array.isRequired,
    isHoverable: PropTypes.bool.isRequired,
    isSubmenu: PropTypes.bool,
    title: PropTypes.string.isRequired
};