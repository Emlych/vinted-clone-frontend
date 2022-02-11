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

  // useEffect(() => {
  //   if (Cookies.get("token")) {
  //     setIsConnected(true);
  //   }
  // }, []);

  //Open modal signup
  const [signupModal, setSignupModal] = useState(false);
  const openSignupModal = () => setSignupModal(true);

  //Open modal login
  const [loginModal, setLoginModal] = useState(false);
  const openLoginModal = () => setLoginModal(true);

  //Close modal signup
  const closeSignupModal = () => {
    setSignupModal(false);
    console.log("close modal");
  };

  return (
    <div className="app">
      <Router>
        <Header
          token={token}
          setUser={setUser}
          openSignupModal={openSignupModal}
          openLoginModal={openLoginModal}
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
            <Route
              path="signup"
              element={
                <Signup setUser={setUser} closeSignupModal={closeSignupModal} />
              }
            />
            <Route path="login" element={<Login setUser={setUser} />} />
          </Route>
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
