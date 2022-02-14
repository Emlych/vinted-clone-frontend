import React, { useState } from "react";
import Home from "./Home";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const Publish = ({ token, setLoginModal }) => {
  //Load pictures
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("files", file);
    formData.append("title", title);
    formData.append("description", description);
    try {
      console.log("token ==>", token);
      console.log("formData ==>", formData);
      const response = await axios.post(
        "https://vinted-clone-eld.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      console.log("error ==>", error.message);
      console.log("error message ==>", error.response.data);
    }
  };

  return token ? (
    <div className="publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <div className="publish__container">
          <label htmlFor="file" className="">
            + Ajouter une photo
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <div className="publish__container">
          <div className="publish__line">
            <label htmlFor="title">Titre</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="ex : Haut Tajine Banane"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="publish__line">
            <label htmlFor="description">Décris ton article</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="ex : très bon état"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <div className="publish__container">
          <div className="publish__line">
            <label for="brand">Titre</label>
            <input
              type="text"
              name="brand"
              id="brand"
              placeholder="ex: Tajine Banane"
            />
          </div>
          <div className="publish__line">
            <label for="size">Taille</label>
            <input
              type="text"
              name="size"
              id="size"
              placeholder="ex: M / T38"
            />
          </div>
          <div className="publish__line">
            <label for="color">Couleur</label>
            <input
              type="text"
              name="color"
              id="color"
              placeholder="ex: multicolore"
            />
          </div>
          <div className="publish__line">
            <label for="size">Etat</label>
            <input
              type="text"
              name="etat"
              id="etat"
              placeholder="ex: très bon état"
            />
          </div>
          <div className="publish__line">
            <label for="location">Lieu</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="ex: Vannes"
            />
          </div>
        </div>
        <div className="publish__container">
          <div className="publish__line">
            <label for="price">Prix</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="ex : 0.00 €"
            />
          </div>
        </div>
        <div className="align-right">
          <input type="submit" value="Ajouter" className="btn primary" />
        </div>
      </form>
    </div>
  ) : (
    //ouvrir modal login
    <Home setLoginModal={setLoginModal(true)} />

    // If no modal and only routes
    // <Navigate to="/login" />
  );
};

export default Publish;
