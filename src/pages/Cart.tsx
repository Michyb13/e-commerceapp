import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const user = useContext(ShopContext);
  const renderCartItems = user?.items.map((item) => {
    if (user?.cartItems[item.id]) {
      return (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.title}
          price={item.price}
          image={item.thumbnail}
        />
      );
    }
  });
  return (
    <div className="cart">
      <h1>Your Cart Items</h1>

      <div className="cart-items">{renderCartItems}</div>
      <div>
        {user?.amount !== 0 ? (
          <h1>SUBTOTAL: ${user?.amount}</h1>
        ) : (
          <h1>Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
