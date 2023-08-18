import { ActionTypes } from "../constant/action-type";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setSearchField = (value) => {
  return {
    type: ActionTypes.SEARCH_FIELD,
    payload: value,
  };
};

export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: id,
  };
};

export const addSingleProductToCart = (id) => {
  return {
    type: ActionTypes.ADD_SINGLEPRODUCT_TO_CART,
    payload: id,
  };
};

export const removeItem = (id) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: id,
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};

export const toggle = (id, type) => {
  return {
    type: ActionTypes.TOGGLEAMOUNT,
    payload: { id, type },
  };
};

export const setUniqueCart = (products) => {
  return {
    type: ActionTypes.UNIQUE_CART,
    payload: products,
  };
};

export const getChecked = (id, checked) => {
  return {
    type: ActionTypes.GET_CHECKED,
    payload: { id, checked },
  };
};

export const getCount = () => {
  return {
    type: ActionTypes.GET_COUNT,
  };
};

export const clearChecked = () => {
  return {
    type: ActionTypes.CLEAR_CHECKED,
  };
};
