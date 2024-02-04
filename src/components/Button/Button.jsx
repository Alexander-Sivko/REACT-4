import PropTypes from "prop-types";
import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { backgroundColor, color, border, float, text, onClick } = this.props;
    return (
      <button
        style={{ backgroundColor, color, border, float }}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  float: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
