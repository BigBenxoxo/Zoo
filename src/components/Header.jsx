import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Ben's Zoo</h1>
      <nav>
        <ul>
          <NavLink to="/animals">Animals</NavLink>

          <NavLink to="/persons">Birds</NavLink>

          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
