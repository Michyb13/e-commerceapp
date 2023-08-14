import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

type ItemProp = {
  id: number;
  key: number;
  name: string;
  price: number;
  image: string;
};

const Item = (props: ItemProp) => {
  const user = useContext(ShopContext);
  const itemAmount = user?.cartItems[props.id];
  return (
    <div className="item-container">
      <img className="image" src={props.image} />
      <h1 className="item-name">{props.name}</h1>
      <p className="item-price">${props.price}.99</p>
      <button className="add-btn" onClick={() => user?.addToCart(props.id)}>
        Add To Cart
        {itemAmount !== undefined ? (
          itemAmount > 0 && <>({itemAmount})</>
        ) : (
          <></>
        )}
      </button>
    </div>
  );
};

export default Item;
