import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { useState } from "react";

function App() {
  //Open modal signup
  const [signupModal, setSignupModal] = useState(false);
  const openSignupModal = () => {
    setSignupModal(true);
    console.log("modal set to true");
  };
  //Open modal login
  const [loginModal, setLoginModal] = useState(false);
  const openLoginModal = () => {
    setLoginModal(true);
    console.log("login modal set to true");
  };

  //Close modal
  const closeModal = () => {
    setSignupModal(false);
    console.log("close modal");
  };

  return (
    <div className="app">
      <Router>
        <Header
          openSignupModal={openSignupModal}
          openLoginModal={openLoginModal}
          closeModal={closeModal}
        />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}

          {/* Trying nested routes to create modal */}
          <Route
            path="/"
            element={<Home signupModal={signupModal} loginModal={loginModal} />}
          >
            {/* chemin relatif, donc j'enlève le slash */}
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
