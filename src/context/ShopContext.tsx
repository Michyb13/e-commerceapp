import { useState, createContext, ReactNode, useEffect } from "react";
interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ContextProps {
  items: Item[];
  cartItems: { [key: number]: number };
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartAmount: (newAmount: number, itemId: number) => void;
  amount: number;
}

export const ShopContext = createContext<null | ContextProps>(null);

const ShopContextProvider = (props: { children: ReactNode }) => {
  const [items, SetItems] = useState<Item[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const res = await fetch("https://dummyjson.com/products?&limit=10");
      if (res.ok) {
        const data = await res.json();
        SetItems(data.products);
      } else {
        throw Error("Server Error");
      }
    };
    getItems();
  }, []);

  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  });

  const addToCart = (itemId: number) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] + 1,
    }));
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] - 1,
    }));
  };

  const updateCartAmount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const totalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[Number(item)] > 0) {
        const itemInfo = items.find((product) => product.id === Number(item));
        total +=
          cartItems[Number(item)] *
          (itemInfo?.price !== undefined ? itemInfo?.price + 0.99 : 0);
      }
    }
    return total;
  };

  const amount = totalAmount();

  const contextValue = {
    items,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartAmount,
    amount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
