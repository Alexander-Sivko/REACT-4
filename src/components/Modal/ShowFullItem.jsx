import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button/Button";

export class ShowFullItem extends Component {
  render() {
    const { item, onShowItem, onAdd } = this.props;
    return (
      <div className="wrapper-item" onClick={() => onShowItem(item)}>
        <div className="full-item">
          <div className="full-content">
            <span className="modal-close" onClick={() => onShowItem(item)}>
              &times;
            </span>
            <h2>{item.name}</h2>
            <p>{item.article}</p>
            <img src={"./img/" + item.img} alt={item.name} />
            <p>{item.description}</p>
            <b>{item.price}</b>
            <p>{item.category}</p>

            <div>
              <Button
                className="close-modal"
                onClick={() => onShowItem(item)}
                backgroundColor="darkorchid"
                border="none"
                text="NO, CLOSE"
              />

              <Button
                className="add-to-cart"
                onClick={() => onAdd(item)}
                backgroundColor="white"
                color="darkorchid"
                text="YES, TO ADD"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
    item: PropTypes.shape({
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      article: PropTypes.string,
    }).isRequired,
  };
}

export default ShowFullItem;
