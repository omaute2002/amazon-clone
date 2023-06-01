import React from "react";

export const initialState = {
  basket: [],
  user: null,
};

//selector

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
  // basket?.reduce((amount, item) => (item.price + amount.price ));
};

// export const getBasketTotal = React.useMemo(() => {
//   return basket.reduce((amount, item) => item.price + amount, 0);
// }, [basket]);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // if we remove element by using the id then,
      // it will delete all the elements with that id present
      // in the basket. SO we will find the index of that element
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // it will return the first element's index which
      // matches the id
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1); // this will remove the item from the basket
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket !`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
