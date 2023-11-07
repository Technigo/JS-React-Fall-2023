import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <nav>
    <ul className="list">
      <li className="listItem">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/info">My Info</NavLink>
      </li>
    </ul>
  </nav>
);
