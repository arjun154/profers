const { ADD_TO_CART, REMOVE_FROM_CART, LOAD_CART, CLEAR_CART } = require("./actionTypes");

export const addToCart = (id, item) => ({
  type: ADD_TO_CART,
  payload: { id, item },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});

export const loadCart = () => ({
  type: LOAD_CART
})

export const clearCart = () => ({
  type: CLEAR_CART
})