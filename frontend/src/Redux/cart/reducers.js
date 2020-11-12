import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

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
      return { ...state, count: count + 1 };
    }
    case REMOVE_FROM_CART: {
      const { count, items } = state;
      const { id } = payload;

      items[id].qty--;
      if (items[id].qty === 0) {
        delete items[id];
      }
      return { ...state, count: count - 1 };
    }
    default:
      return state;
  }
};

export default reducers;
