import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>Jamey's Jewelry</p>
      </NavLink>
      <nav>
        <NavLink to="/jewelry">Jewelry</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          {token ? (
            <a onClick={() => logout()}>Log out</a>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
        )}
      </nav>
    </header>
  );
}
