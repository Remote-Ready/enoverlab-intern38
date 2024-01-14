import { createContext, useCallback, useState } from "react";

const defaultValue = {
  cart: [],
  addToCart: () => undefined,
};

const CART_STORAGE_KEY = "cart";

const getCartFromLocalStorage = () => {
  const fromStorage = localStorage.getItem(CART_STORAGE_KEY);

  try {
    return JSON.parse(fromStorage) ?? [];
  } catch (error) {
    localStorage.removeItem(CART_STORAGE_KEY);
  }
};

export const CartContext = createContext(defaultValue);

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const addToCart = useCallback((productId) => {
    setCart((cart) => {
      const newCart = [...cart];
      const existingIndex = newCart.findIndex(({ id }) => id === productId);
      if (existingIndex > -1) {
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          count: newCart[existingIndex].count + 1,
        };
      } else {
        newCart.push({
          id: productId,
          count: 1,
        });
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));

      return newCart;
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
