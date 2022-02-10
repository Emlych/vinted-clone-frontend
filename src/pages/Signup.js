import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  //Send data to Vinted API
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          //   "https://vinted-clone-eld.herokuapp.com/user/signup",
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          data
        );
        console.log("response ==>", response);
        setToken(response.data.token);
      } catch (error) {
        console.log("error ==>", error.response);
      }
    };
    fetchData();
  }, [data]);

  // Data to post
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data to store ==>", username, email, password);
    //Stocker les valeurs dans le data à envoyer
    setData({ username: username, email: email, password: password });
  };

  return (
    <div className="signup">
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
        <input type="submit" value="S'inscrire" />
      </form>
      <div>Tu as déjà un compte ? Connecte-toi ! </div>
    </div>
  );
};

export default Signup;
