import React from "react";
import { useParams } from "react-router-dom";
import products from "/public/data.json";
import Collapse from "../collapse/Collapse";
import Slider from "../slider/Slider";
import Tag from "../tag/Tag";

function LogementSingle() {
  // Utilisez useParams() pour obtenir les paramètres de l'URL
  const { id } = useParams();
  // Afficher les données du tableau products dans la console
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <Slider pictures={product.pictures} />
      <div>
        <h1>{product.title}</h1>
        <h2>{product.location}</h2>
        <div>
          {product.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        
      </div>

      <section className="collapseLogement">
        <div className="collapse collapseLogement_size">
          <Collapse title={"description"} content={product.description} />
        </div>
        <div className="collapse collapseLogement_size">
          <Collapse
            title={"Équipements"}
            content={
              <ul>
                {product.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
    </div>
  );
}

export default LogementSingle;
