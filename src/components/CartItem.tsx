import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

type CartItemProps = {
  id: number;
  key: number;
  name: string;
  price: number;
  image: string;
};
const CartItem = (props: CartItemProps) => {
  const user = useContext(ShopContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    user?.updateCartAmount(Number(value), props.id);
  };
  return (
    <div className="cart-item">
      <img src={props.image} />

      <div className="description">
        <h1 className="item-name">{props.name}</h1>
        <h3 className="item-price">${props.price}.99</h3>
        <div className="count-handler">
          <button onClick={() => user?.removeFromCart(props.id)}>-</button>
          <input
            type="text"
            value={user?.cartItems[props.id]}
            onChange={handleChange}
          />
          <button onClick={() => user?.addToCart(props.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
