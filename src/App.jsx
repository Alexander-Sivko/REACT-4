import React, { useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addToOrder, deleteOrder } from './redux/orders';
import { addToDesire, deleteDesire } from './redux/desires';
import { loadItems } from './redux/products';

import HomePage from './components/Page/HomePage';
import BasketPage from './components/Page/BasketPage';
import FavoritePage from './components/Page/FavoritePage';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';


function Layout() {
  const dispatch = useDispatch();

  const orders = useSelector(state => state.orders.items);
  const desires = useSelector(state => state.desires.items);

  return (
    <div className="wrapper">
      <Header
        orders={orders}
        desires={desires}
        onDelete={id => dispatch(deleteOrder(id))}
        onsDelete={id => dispatch(deleteDesire(id))}
      />

      <Outlet
        context={{
          state: { orders, desires },

          addToDesire: item => {
            dispatch(addToDesire(item));
          },
          deleteDesire: id => {
            dispatch(deleteDesire(id));
          },

          addToOrder: item => {
            dispatch(addToOrder(item));
          },
          deleteOrder: id => {
            dispatch(deleteOrder(id));
          },
        }}
      />

      <Footer />
    </div>
  );
}

export function App() {
  const dispatch = useDispatch();

  const itemsData = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(loadItems());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage itemsData={itemsData} />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
