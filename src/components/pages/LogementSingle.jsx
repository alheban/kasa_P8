
import { useParams } from "react-router-dom";
import Collapse from "../collapse/Collapse";
import Slider from "../slider/Slider";
import Tag from "../tag/Tag";
import Rating from "../rating/rating";
import ErrorPage from "./ErrorPage.jsx";

import {React,  useContext } from 'react';
import { DataContext } from '../hooks/useContext.jsx';

function LogementSingle() {
  // Utilisez useParams() pour obtenir les paramètres de l'URL
  const { id } = useParams();

  // Accédez au contexte de données
  const { dataLogement } = useContext(DataContext);


// Rechercher le produit correspondant à l'ID
  const product = dataLogement.find((product) => product.id === id);

  if (!product) {
    return <ErrorPage/>;
  
  }

// Destructuration des propriétés du produit
  const { pictures, title, location, tags, host, rating, description, equipments } = product;
  const name = host.name.split(' ');

  return (
    <>
      <Slider pictures={pictures} title={title}/>
      <div className="container_fichelogement">
        <div className="logement_title">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="logement_title_tags">
            {tags.map((tag, index) => (
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
              src={host.picture}
              alt="Hôte de cet hébergement"
            />
          </div>
          <Rating rating={rating} />
        </div>
      </div>

      <section className="collapseLogement">
        <div className="collapse collapseLogement_size">
          <Collapse title={"description"} content={description} />
        </div>
        <div className="collapse collapseLogement_size">
          <Collapse
            title={"Équipements"}
            content={
              <ul>
                {equipments.map((equipment, index) => (
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
