import React, { useContext } from "react";
import Countries from "../components/Countries";
import Login from "../components/Login";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Logo />
      <Navigation />
      {user ? <Countries /> : <Login />}
    </div>
  );
};

export default Home;
