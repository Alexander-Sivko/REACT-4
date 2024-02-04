import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';
import ordersReducer from './orders';
import favoritesReducer from './favorites'
import desiresReducer from './desires';
import modalFavorite from './favoriteModal'
import modalBasket from './basketModal'

export default configureStore({
  reducer: {
    products: productsReducer,
    orders: ordersReducer,
    favorites: favoritesReducer,
    desires: desiresReducer,
    modalFavorite: modalFavorite,
    modalBasket: modalBasket,
  },
});
