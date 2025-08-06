import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header id="navbar">
      <NavLink id="brand" to="/">
        <p>3 Jewels</p>
      </NavLink>
      <nav>
        {!token ? (
           <>
            <button onClick={logout}>Log out</button>
        <NavLink to="/jewelrypage">Jewelry</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/purchases">Purchases</NavLink>
        </>  
        ) : (
          <NavLink to="/login">Log in</NavLink>
        )}
       
      </nav>

    </header>
  );
}
