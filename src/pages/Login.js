import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [data, setData] = useState("");
  const [token, setToken] = useState("");

  //Send data to Vinted API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vinted-clone-eld.herokuapp.com/user/login",
          data
        );
        console.log("response ==>", response);
        setToken(response.data.searchedUser.token);
        console.log(token);
      } catch (error) {
        console.log("error ==>", error.response);
      }
    };
    fetchData();
  }, [data]);

  // Data to post
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Create cookie to save token
  Cookies.set("token", token);

  //Read cookie
  console.log(Cookies.get("token"));
  //Navigate to Home if API send back token
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data to store ==>", email, password);
    //Stocker les valeurs dans le data à envoyer
    setData({ email: email, password: password });

    //get back to home page if sign up done
    if (token.length > 0) navigate("/");
  };
  return (
    <div className="signup">
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
        <input type="submit" value="S'inscrire" />
      </form>
      <Link to="/signup">Pas encore de compte? Inscris-toi ! </Link>
    </div>
  );
};

export default Login;
