import React from 'react';

import { useOutletContext } from 'react-router-dom';

import Order from '../Header/Order';

const showOrders = (orders, deleteOrder) => {
  let summa = 0;

  orders.forEach(el => (summa += Number.parseFloat(el.price)));

  return (
    <>
      {orders.map(el => (
        <Order onDelete={deleteOrder} key={el.id} item={el} />
      ))}

      <p className="summa">
        Summa:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(summa)}
      </p>
    </>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no products</h2>
    </div>
  );
};

function BasketPage() {
  const context = useOutletContext();

  const { orders = [] } = context.state || {};

  return (
    <div className="shop-cart">
      {orders && orders.length > 0
        ? showOrders(orders, context.deleteOrder)
        : showNothing()}
    </div>
  );
}

export default BasketPage;
