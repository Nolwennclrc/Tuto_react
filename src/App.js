import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./components/Login";
import Logout from "./pages/Logout";

const App = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          {/* path="*" fonctionne si jamais l'URL ne correspond à rien de déclaré au-dessus */}
          <Route path="*" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
