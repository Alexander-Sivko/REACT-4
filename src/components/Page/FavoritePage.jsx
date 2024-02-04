import React from 'react';

import { useOutletContext } from 'react-router-dom';

import Desire from '../Header/Desire';

const showDesires = (desires, deleteDesire) => {
  let summa = 0;
  desires.forEach(el => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {desires.map(el => (
        <Desire onsDelete={deleteDesire} key={el.id} item={el} />
      ))}
      <p className="summa">
        Summa:{' '}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(summa)}
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>There are no products</h2>
    </div>
  );
};

function FavoritePage() {
  const context = useOutletContext();

  const { desires = [] } = context.state || {};

  return (
    <div className="shop-favorite">
      {desires && desires.length > 0
        ? showDesires(desires, context.deleteDesire)
        : showNothing()}
    </div>
  );
}

export default FavoritePage;
