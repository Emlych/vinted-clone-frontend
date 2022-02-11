import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";

//!!!ne jamais appeler useNavigate en dehors du routeur.

function App() {
  //Cookies and navigation
  const [token, setToken] = useState(Cookies.get("userToken") || null); //ne pas laisser null dans le useState pour stocker la valeur de userToken au refresh
  const setUser = (token) => {
    token
      ? Cookies.set("userToken", token, { expires: 2 })
      : Cookies.remove("userToken");
    setToken(token);
  };

  //Open modal
  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header
          token={token}
          setUser={setUser}
          setSignupModal={setSignupModal}
          setLoginModal={setLoginModal}
        />
        {signupModal && (
          <Signup
            setUser={setUser}
            signupModal={signupModal}
            setSignupModal={setSignupModal}
            setLoginModal={setLoginModal}
          />
        )}
        {loginModal && (
          <Login
            setUser={setUser}
            setLoginModal={setLoginModal}
            setSignupModal={setSignupModal}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />

          {/* Solution without modal */}
          {/* <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
