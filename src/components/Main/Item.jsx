import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { Button } from '../Button/Button';

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  handleAddToFavorite = () => {
    const { item, onsShowItem } = this.props;
    this.setState({ isFavorite: !this.state.isFavorite });
    onsShowItem(item);
  };
  render() {
    const { item, onShowItem } = this.props;
    const { isFavorite } = this.state;
    return (
      <div className="item">
        <div className="add-to-favorite">
          <FaStar
            className={`star-favorite ${isFavorite ? 'selected' : ''}`}
            text="Add to favorite"
            onClick={this.handleAddToFavorite}
          />
        </div>
        <h2>{item.name}</h2>
        <p>{item.article}</p>
        <img src={'./img/' + item.img} alt={item.name} />
        <p>{item.description}</p>
        <b>{item.price}</b>
        <p>{item.category}</p>
        <Button
          className="add-to-cart"
          onClick={() => onShowItem(item)}
          text="TO ADD"
          float="right"
          backgroundColor="white"
          color="darkorchid"
        />
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onShowItem: PropTypes.func.isRequired,
  onsShowItem: PropTypes.func.isRequired,
};

export default Item;
