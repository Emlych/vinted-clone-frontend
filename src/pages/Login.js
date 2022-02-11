import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  //Navigate to Home if API send back token
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    //Send data to Vinted API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vinted-clone-eld.herokuapp.com/user/login",
          { email: email, password: password }
        );
        console.log("response ==>", response);
        Cookies.set("token", response.data.searchedUser.token);
      } catch (error) {
        console.log("error ==>", error.message);
      }
    };
    fetchData();

    //get back to home page if sign up done
    if (Cookies.get("token").length > 0) navigate("/");
  };
  return (
    <div className="signlog">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePassword}
        />
        <input type="submit" value="Se connecter" className="submit primary" />
        <Link to="/signup">
          <div className="message">Pas encore de compte? Inscris-toi !</div>
        </Link>
      </form>
    </div>
  );
};

export default Login;
