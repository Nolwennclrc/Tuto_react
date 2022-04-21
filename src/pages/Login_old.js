import React, { useContext } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { UserContext } from "../context/UserContext";
import { login } from "../utils/log";

const Login_old = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <Logo />
      <Navigation />
      <div class="container">
        <h1>Connection</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user ? (
          <button
            onClick={() => {
              //call logout
              setUser(null);
            }}
          >
            logout
          </button>
        ) : (
          <button
            onClick={async () => {
              const user = await login();
              setUser(user);
            }}
          >
            login
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
