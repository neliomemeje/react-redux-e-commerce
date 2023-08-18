import { ActionTypes } from "../constant/action-type";

const initialState = {
  products: [],
  searchField: "",
  cart: [],
  singleProduct: [],
  checkItems: [],
  count: 0,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  function getItem() {
    const tempProducts = [...state.products];
    return tempProducts.find((item) => item.id === payload);
  }
  const uniqueCart = [
    ...new Map(state.cart.map((item) => [item["id"], item])).values(),
  ];

  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SEARCH_FIELD:
      return { ...state, searchField: payload };
    case ActionTypes.ADD_TO_CART:
      const newItem = getItem();
      newItem.inCart = true;
      newItem.count = 1;
      newItem.subTotal = newItem.price;
      return {
        ...state,
        count: state.count + 1,
        cart: [...state.cart, newItem],
      };
    case ActionTypes.REMOVE_ITEM:
      const copyCart = uniqueCart.filter((item) => item.id !== payload);
      const updateRemove = state.checkItems.filter(
        (item) => item.id !== payload
      );
      return {
        ...state,
        cart: [...copyCart],
        checkItems: [...updateRemove],
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
        checkItems: [],
      };
    case ActionTypes.TOGGLEAMOUNT:
      const selected = uniqueCart
        .map((item) => {
          if (item.id === payload.id) {
            if (payload.type === "inc") {
              item.count += 1;
            }
            if (payload.type === "dec") {
              item.count -= 1;
            }
            item.subTotal = item.count * item.price;
            item.subTotal = parseFloat(item.subTotal.toFixed(2));
          }
          return item;
        })
        .filter((item) => {
          if (item.count === 0) {
            if (window.confirm("Do you want to remove the product?")) {
              return item.count !== 0;
            } else {
              item.count = 1;
              item.subTotal = item.count * item.price;
              item.subTotal = parseFloat(item.subTotal.toFixed(2));
            }
          }
          return item;
        });

      return {
        ...state,
        cart: selected,
      };
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, singleProduct: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, singleProduct: {} };
    case ActionTypes.ADD_SINGLEPRODUCT_TO_CART:
      const singleProduct = state.singleProduct;
      singleProduct.inCart = true;
      singleProduct.count = 1;
      singleProduct.subTotal = singleProduct.price;
      return {
        ...state,
        cart: [...state.cart, singleProduct],
        count: state.count + 1,
      };
    case ActionTypes.GET_CHECKED:
      const copyUnique = [...uniqueCart];
      let product = copyUnique.find((item) => item.id === payload.id);
      if (payload.checked) {
        return { ...state, checkItems: [...state.checkItems, product] };
      } else {
        return {
          ...state,
          checkItems: state.checkItems
            .slice(0, state.checkItems.indexOf(product))
            .concat(
              state.checkItems.slice(state.checkItems.indexOf(product) + 1)
            ),
        };
      }
    case ActionTypes.CLEAR_CHECKED:
      return { ...state, checkItems: [] };
    case ActionTypes.GET_COUNT:
      let counts = uniqueCart.reduce((total, item) => total + item.count, 0);
      return { ...state, count: counts };

    default:
      return state;
  }
};
