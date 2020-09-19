export const initialState = {
  basket: []
};

//write selectors in seperate file
export const getBasketTotal = basket =>
  basket.reduce((sum, item) => sum + item.price * 100, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        basketItem => basketItem.id == action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cannot remove product (id: ${action.id}) as it is not in basket"
        );
      }
      return {
        ...state,
        basket: newBasket
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
