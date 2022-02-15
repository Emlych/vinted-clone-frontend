import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import Cookies from "js-cookie";
import { useState } from "react";

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
  const [params, setParams] = useState({ sort: "asc" });
  const handleInput = (event) => {
    const newParams = { ...params };
    newParams.product_name = event.target.value;
    setParams(newParams);
  };

  //without range (same for priceMax)
  // const handlePriceMin = (event) => {
  //   const newParams = { ...params };
  //   newParams.priceMin = event.target.value;
  //   setParams(newParams);
  // };

  //with range
  const [priceRange, setPriceRange] = useState([5, 300]);
  const handlePriceRange = (values) => {
    const newParams = { ...params };
    newParams.priceMin = values[0];
    newParams.priceMax = values[1];
    setParams(newParams);
    setPriceRange(values);
    console.log("priceRange of ==>", priceRange);
  };

  //Sort by price asc by default, if not desc with !isAsc
  //In reacteur API : "price-asc", in own API : "asc"
  const handleSort = () => {
    const newParams = { ...params };
    newParams.sort === "asc"
      ? (newParams.sort = "desc")
      : (newParams.sort = "asc");
    setParams(newParams);
  };

  return (
    <div className="app">
      <Router>
        <Header
          handleInput={handleInput}
          priceRange={priceRange}
          handlePriceRange={handlePriceRange}
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
            onClickOutside={() => {
              setSignupModal(false);
            }}
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
          <Route
            path="/publish"
            element={<Publish setLoginModal={setLoginModal} />}
          />
          <Route path="/payment" element={<Payment />} />

          {/* Solution without modal */}
          {/* <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
