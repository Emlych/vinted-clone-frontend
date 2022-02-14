//To do :
// - errorMessage display
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({
  setUser,
  signupModal,
  setSignupModal,
  setLoginModal,
  onClickOutside,
}) => {
  //Navigate to Home if API send back token
  const navigate = useNavigate();

  // Data to post
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Handle form infos
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
          { username, email, password }
        );
        console.log("response ==>", response);
        if (response.data.token) {
          setUser(response.data.token);
          navigate("/");
        }
      } catch (error) {
        console.log("error ==>", error.message);
        if (error.response.status === 409)
          setErrorMessage("cet email est déjà utilisé");
      }
    };
    fetchData();
  };

  //Close modal
  //assign current component instance's DOM to ref variable
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    //je vois pas ce que signifie ce true : capture, once ou passive?
    //detect global click events on entire document
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      //unregister the click when component unmounted
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!signupModal) return null;

  // window.addEventListener("click", (event) => {
  //   console.log(event.target.id);
  //   if (
  //     signupModal &&
  //     event.target.id !== "openSignup" &&
  //     event.target.id !== "signModal"
  //   )
  //     setSignupModal(false);
  // });

  return (
    <div ref={ref} className="modal">
      <div className="signlog" id="signModal">
        <button className="close" onClick={() => setSignupModal(false)}>
          &times;
        </button>
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
          <span>{errorMessage}</span>
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

          <div
            className="message pointer"
            onClick={() => {
              setSignupModal(false);
              setLoginModal(true);
            }}
          >
            Tu as déjà un compte ? Connecte-toi !
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
