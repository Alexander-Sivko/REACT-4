import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import Items from '../Main/Items';
import Categories from '../Categories/Categories';
import ShowFullItem from '../Modal/ShowFullItem';
import ShowFavoriteItem from '../Modal/ShowFavoriteItem';

export function HomePage({ itemsData }) {
  const context = useOutletContext();

  const [items, setItems] = useState(itemsData);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState(null);
  const [showFavoriteItem, setShowFavoriteItem] = useState(false);
  const [favoriteItem, setFavoriteItem] = useState(null);

  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

  const choseCategory = category => {
    if (category === 'all') {
      setItems(itemsData);

      return;
    }

    setItems(_items => itemsData.filter(el => el.category === category));
  };

  const onShowItem = item => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  const onsShowItem = item => {
    setFavoriteItem(item);
    setShowFavoriteItem(!showFavoriteItem);
  };

  const addToDesire = item => context.addToDesire(item);

  const addToOrder = item => context.addToOrder(item);

  return (
    <>
      <div className="presentation"></div>

      <Categories choseCategory={choseCategory} />

      <Items
        onShowItem={onShowItem}
        onsShowItem={onsShowItem}
        items={items}
        onAdd={addToOrder}
        onsAdd={addToDesire}
      />

      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          onAdd={addToOrder}
          item={fullItem}
        />
      )}

      {showFavoriteItem && (
        <ShowFavoriteItem
          onsShowItem={onsShowItem}
          onsAdd={addToDesire}
          item={favoriteItem}
        />
      )}
    </>
  );
}

export default HomePage;
