import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <nav>
        <NavLink to="/">
          <h1>Michy B's Store</h1>
        </NavLink>
        <NavLink to="cart">
          <button className="cart-button">
            <FaCartShopping className="cart-icon" />
          </button>
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
