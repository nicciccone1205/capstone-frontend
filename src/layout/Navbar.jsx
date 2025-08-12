import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
    <nav>
      <NavLink id="brand" to="/">
        <p>3 Jewels</p>
      </NavLink>
      <NavLink to="/jewelrypage">Jewelry</NavLink>
        <NavLink to="/orderhistory">Order History</NavLink>
        <NavLink to="/purchases">Checkout</NavLink>
        {token ? (
          <>
            <button onClick={logout}>Log out</button>
          </>
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