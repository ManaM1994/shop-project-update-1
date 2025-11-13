import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const ADD = "ADD";
export const REMOVE = "REMOVE";

const reducer = (state, action) => {
  if (action.type === ADD) {
    return [...state, action.payload];
  }
  if (action.type === REMOVE) {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
};

const CartContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
