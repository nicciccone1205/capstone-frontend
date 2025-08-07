import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addItems = (product) => {
      const itemExists = cart.find((i) => i.id === product.id);
      if (itemExists) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        );
      } else {
        const item = { ...product, quantity: 1 };
        setCart([...cart, item]);
      }
    };
  
    const removeItems = (itemToRemove) => {
      setCart(
        cart
          .map((item) =>
            item.id === itemToRemove.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      );
    };

    const value = { cart, addItems, removeItems };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
  
}

export function useCart() {
    const context = useContext(CartContext);
    if(!context)
        throw Error("useCart must be used within a CartContext Provider");
    return context;
}