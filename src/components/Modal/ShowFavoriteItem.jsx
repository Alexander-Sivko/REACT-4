import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export class ShowFavoriteItem extends Component {
  render() {
    const { item, onsShowItem, onsAdd } = this.props;
    return (
      <div className="wrapper-item" onClick={() => onsShowItem(item)}>
        <div className="full-item">
          <div className="full-item-content">
            <span className="modal-close" onClick={() => onsShowItem(item)}>
              &times;
            </span>
            <h2>{item.name}</h2>
            <p>{item.article}</p>
            <img src={"./img/" + item.img} alt={item.name} />
            <p>{item.description}</p>
            <b>{item.price}</b>
            <p>{item.category}</p>

            <Button
              className="add-to-favorite"
              onClick={() => onsAdd(item)}
              backgroundColor="darkorchid"
              border="none"
              text="YES, TO FAVORITE"
            />
          </div>
        </div>
      </div>
    );
  }
}

ShowFavoriteItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    category: PropTypes.string,
    article: PropTypes.string,
  }).isRequired,
  onsShowItem: PropTypes.func.isRequired,
  onsAdd: PropTypes.func.isRequired,
};

export default ShowFavoriteItem;
