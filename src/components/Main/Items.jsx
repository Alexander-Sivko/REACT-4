import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export class Items extends Component {
  render() {
    const { items, onShowItem, onsShowItem, onAdd, onsAdd } = this.props;
    return (
      <main>
        {items.map((el) => (
          <Item
            onShowItem={onShowItem}
            key={el.id}
            item={el}
            onAdd={onAdd}
            onsShowItem={onsShowItem}
            onsAdd={onsAdd}
          />
        ))}
      </main>
    );
  }
}

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onShowItem: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Items;
