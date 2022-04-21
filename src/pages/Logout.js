import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div class="content">
      <Logo />
      <Navigation />
      <h1>Se déconnecter</h1>

      {user ? (
        <NavLink to="/home">
          <button onClick={() => setUser(null)}>Déconnexion</button>
        </NavLink>
      ) : (
        "tu dois être connecté"
      )}
    </div>
  );
};

export default Logout;
