import About from "./components/About";
import Admin from "./components/Admin";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Update from "./components/Update";

import { useState } from "react";
import Header from "./shared/Header";
import Signup from "./Signup";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || {});

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <About />
      <Admin />
      <Create />
      <Home />
      <Login user={user} setUser={setUser} />
      <Update />
      <Signup user={user} setUser={setUser} />
    </div>
  );
}

export default App;
