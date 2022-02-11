import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { useState } from "react";

function App() {
  //Open modal
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    console.log("modal set to true");
  };
  return (
    <div className="app">
      <Router>
        <Header openModal={openModal} />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> */}

          {/* Trying nested routes to create modal */}
          <Route path="/" element={<Home modal={modal} />}>
            {/* chemin relatif, donc j'enlève le slash */}
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/offer/:id" element={<Offer />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
