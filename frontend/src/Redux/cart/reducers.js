import { loadCart } from "./actions";
import { ADD_TO_CART, LOAD_CART, REMOVE_FROM_CART } from "./actionTypes";

const initState = {
  items: {},
  count: 0,
};

const reducers = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const { count, items } = state;
      const { id, item } = payload;

      if (items[id]) {
        items[id].qty++;
      } else {
        item.qty = 1;
        items[id] = item;
      }
      const newState = { ...state, items: {...items}, count: count + 1 };
      localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }
    case REMOVE_FROM_CART: {
      const { count, items } = state;
      const { id } = payload;

      items[id].qty--;
      if (items[id].qty === 0) {
        delete items[id];
      }
      const newState = { ...state, items: {...items}, count: count - 1 };
      localStorage.setItem("cart", JSON.stringify(newState))
      return newState
    }

    case LOAD_CART: {
      const cart = JSON.parse(localStorage.getItem("cart")) || {items: {}, count: 0}
      return {...cart}
    }
    default:
      return state;
  }
};

export default reducers;
