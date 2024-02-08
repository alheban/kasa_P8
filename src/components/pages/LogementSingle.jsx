import React from "react";
import { useParams } from "react-router-dom";
import products from "/public/data.json";
import Collapse from "../collapse/Collapse";
import Slider from "../slider/Slider";

function LogementSingle() {
  // Utilisez useParams() pour obtenir les paramètres de l'URL
  const { id } = useParams();
  // Afficher les données du tableau products dans la console
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h1>Page de logement</h1>
      <p>Identifiant du logement : {id}</p>
      <Slider pictures={product.pictures} />
      <section className="collapseLogement">
        <div className="collapse collapseLogement_size">
          <Collapse title={"description"} content={product.description} />
        </div>
        <div className="collapse collapseLogement_size">
          <Collapse title={"Équipements"} content={
    <ul>
      {product.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>} />
        </div>
      </section>
    </div>
  );
}

export default LogementSingle;
