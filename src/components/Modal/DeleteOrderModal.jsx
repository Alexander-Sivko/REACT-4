import React, { Component } from "react";

import { Button } from "../Button/Button";

export class DeleteOrderModal extends Component {

  render() {
      const { item, onsShowItem, onDelete } = this.props;
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
              <p>YOU WANT TO REMOVE THIS PRODUCT</p>
  
              <Button
                className="add-to-favorite"
                onClick={() => onDelete(item.id)}
                backgroundColor="darkorchid"
                border="none"
                text="TO DELETE"
              />
            </div>
          </div>
        </div>
      );
  }
}

export default DeleteOrderModal