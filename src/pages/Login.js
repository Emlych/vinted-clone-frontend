import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser, setLoginModal, setSignupModal }) => {
  //Navigate to Home if API send back token
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://vinted-clone-eld.herokuapp.com/user/login",
          { email: email, password: password }
        );
        console.log("response ==>", response.data);
        if (response.data.searchedUser.token) {
          setUser(response.data.searchedUser.token);
          navigate("/");
        }
      } catch (error) {
        console.log("error ==>", error.message);
        console.log("error ==>", error.response);
        if (error.response.status === 400 || error.response.status === 401)
          setErrorMessage("Mauvais email/mot de passe");
      }
    };
    fetchData();
  };
  return (
    <div className="modal">
      <div className="signlog">
        <button className="close" onClick={() => setLoginModal(false)}>
          &times;
        </button>
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
          <input
            type="submit"
            value="Se connecter"
            className="submit primary"
          />

          <div
            className="message"
            onClick={() => {
              setSignupModal(true);
              setLoginModal(false);
            }}
          >
            Pas encore de compte? Inscris-toi !
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
