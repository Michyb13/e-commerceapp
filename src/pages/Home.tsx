import { useContext } from "react";
import Item from "../components/Item";
import { ShopContext } from "../context/ShopContext";

const Home = () => {
  const user = useContext(ShopContext);

  const renderItems = user?.items.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      name={item.title}
      price={item.price}
      image={item.thumbnail}
    />
  ));

  return <div className="home-container">{renderItems}</div>;
};

export default Home;
