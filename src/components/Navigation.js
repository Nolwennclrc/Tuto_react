import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>A propos</li>
        </NavLink>

        {user ? (
          <NavLink
            to="/logout"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Déconnexion</li>
          </NavLink>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Navigation;
