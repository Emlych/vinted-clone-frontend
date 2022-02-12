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

  //Search filter
  const [search, setSearch] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [params, setParams] = useState({});
  const handleInput = (event) => {
    setSearch(event.target.value);
    setParams({ title: search });
  };
  const handlePriceMin = (event) => {
    setPriceMin(event.target.value);
    const newParams = { ...params };
    // console.log(newParams); //object with title if provided with, or empty
    newParams.priceMin = priceMin;
    // console.log(newParams);
    setParams(newParams);
    // console.log(params);
  };

  return (
    <div className="app">
      <Router>
        <Header
          search={search}
          handleInput={handleInput}
          priceMin={priceMin}
          handlePriceMin={handlePriceMin}
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
            loginModal={loginModal}
            setLoginModal={setLoginModal}
            setSignupModal={setSignupModal}
          />
        )}
        <Routes>
          <Route path="/" element={<Home params={params} />} />
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
