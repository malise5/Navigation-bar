import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="nav">
      <Link className="logo-tag" to="/">
        <h2>Halkano</h2>
      </Link>
      <Search />
      <nav>
        <NavLink exact to="/">
          Home{" "}
        </NavLink>
        <NavLink to="/registrtion">Registrtion </NavLink>
        <NavLink to="/login">login </NavLink>
        <NavLink to="/profile">Profile </NavLink>
      </nav>
    </div>
  );
}
