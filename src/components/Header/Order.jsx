import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FiX } from "react-icons/fi";

export class Order extends Component {
  
  componentsDidMount() {
    const { item } = this.props;
    localStorage.setItem('item', JSON.stringify(item));
  }
  render() {
    const { item, onDelete } = this.props;
    return (
      <div className="item">
        <FiX className="delete-icon" onClick={() => onDelete(item.id)} />
        <h2>{item.name}</h2>
        <p>{item.article}</p>
        <img src={'./img/' + item.img} alt={item.name} />
        <p>{item.description}</p>
        <b>{item.price}</b>
        <p>{item.category}</p>
      </div>
    );
  }
}

Order.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Order;
