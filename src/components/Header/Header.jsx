import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SlBasket } from 'react-icons/sl';
import { FaStar } from 'react-icons/fa';

export default function Header(props) {
  
  const [cartOpen, setCartOpen] = useState(
    localStorage.getItem('cartOpen') === 'true' || false,
  );
  useEffect(() => {
    localStorage.setItem('cartOpen', cartOpen.toString());
  }, [cartOpen]);

  const [favoriteOpen, setFavoriteOpen] = useState(
    localStorage.getItem('favoriteOpen') === 'true' || false,
  );

  useEffect(() => {
    localStorage.setItem('favoriteOpen', favoriteOpen.toString());
  }, [favoriteOpen]);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/cabinet">Cabinet</Link>
          </li>
        </ul>
        <Link to="/favorite">
          <FaStar
            onClick={() => setFavoriteOpen(!favoriteOpen)}
            className={`favorite ${favoriteOpen && 'active'}`}
          />
        </Link>
        {props.desires.length > 0 && (
          <span className="counter-favorite">{props.desires.length}</span>
        )}
        <Link to="/cart">
          <SlBasket
            onClick={() => setCartOpen(!cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`}
          />
        </Link>
        {props.orders.length > 0 && (
          <span className="counter">{props.orders.length}</span>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  desires: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
