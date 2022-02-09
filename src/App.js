import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
