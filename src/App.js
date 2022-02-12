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
  const [params, setParams] = useState({ sort: "price-asc" });
  const handleInput = (event) => {
    const newParams = { ...params };
    newParams.title = event.target.value;
    setParams(newParams);
  };
  const handlePriceMin = (event) => {
    const newParams = { ...params };
    newParams.priceMin = event.target.value;
    setParams(newParams);
  };
  const handlePriceMax = (event) => {
    const newParams = { ...params };
    newParams.priceMax = event.target.value;
    setParams(newParams);
  };
  //Sort by price asc by default, if not desc with !isAsc
  //In reacteur API : "price-asc", in own API : "asc"
  const handleSort = () => {
    const newParams = { ...params };
    newParams.sort === "price-asc"
      ? (newParams.sort = "price-desc")
      : (newParams.sort = "price-asc");
    setParams(newParams);
  };

  return (
    <div className="app">
      <Router>
        <Header
          handleInput={handleInput}
          handlePriceMin={handlePriceMin}
          handlePriceMax={handlePriceMax}
          handleSort={handleSort}
          sort={params.sort}
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
