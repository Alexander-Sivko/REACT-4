import React, { Component } from "react";
import PropTypes from "prop-types";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All",
        },
        {
          key: "Showcases",
          name: "Showcases",
        },
        {
          key: "Commodes",
          name: "Commodes",
        },
        {
          key: "Sofas",
          name: "Sofas",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.choseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  choseCategory: PropTypes.func.isRequired,
};

export default Categories;
