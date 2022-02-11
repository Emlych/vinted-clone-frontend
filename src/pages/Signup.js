import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  //Navigate to Home if API send back token
  const navigate = useNavigate();

  // Data to post
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vinted-clone-eld.herokuapp.com/user/signup",
          //   "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          { username: username, email: email, password: password }
        );
        console.log("response ==>", response);
        Cookies.set("token", response.data.token);
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
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={handleName}
        />
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
        <div className="input-checkbox">
          <input type="checkbox" name="newsletter" id="newsletter" />
          <label>S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <input type="submit" value="S'inscrire" className="submit primary" />
        <Link to="/login">
          <div className="message">Tu as déjà un compte ? Connecte-toi !</div>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
