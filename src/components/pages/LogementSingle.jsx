import React from "react";
import { useParams } from "react-router-dom";
import products from "/public/data.json";
import Collapse from "../collapse/Collapse";
import Slider from "../slider/Slider";
import Tag from "../tag/Tag";
import Rating from "../rating/rating";

function LogementSingle() {
  // Utilisez useParams() pour obtenir les paramètres de l'URL
  const { id } = useParams();
  // Afficher les données du tableau products dans la console
  const product = products.find((product) => product.id === id);
  const name = product.host.name.split(" ");

  return (
    <>
      <Slider pictures={product.pictures} />
      <div className="container_fichelogement">
        <div className="logement_title">
          <h1>{product.title}</h1>
          <h2>{product.location}</h2>
          <div className="logement_title_tags">
            {product.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="host_info">
          <div className="host">
            <div className="host_name">
              <span>{name[0]}</span>
              <span>{name[1]}</span>
            </div>
            <img
              className="host_picture"
              src={product.host.picture}
              alt="Hôte de cet hébergement"
            />
          </div>
          <Rating rating={product.rating} />
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
    </>
  );
}

export default LogementSingle;
