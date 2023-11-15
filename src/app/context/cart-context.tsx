import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCard] = useState();
};
