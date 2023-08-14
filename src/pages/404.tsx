import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry, we couldn't find the page you requested.</h1>
      <h1>
        Please, click <NavLink to="/">here</NavLink> to go back to the home
        page.
      </h1>
    </div>
  );
};

export default NotFound;
