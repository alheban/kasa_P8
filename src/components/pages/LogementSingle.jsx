import React from 'react';
import { useParams } from 'react-router-dom';
import products from "/public/data.json";
import Collapse from '../collapse/Collapse';
import Slider from '../slider/Slider';


function LogementSingle() {
// Utilisez useParams() pour obtenir les paramètres de l'URL
const {id} = useParams();
// Afficher les données du tableau products dans la console
const logement = products.find((logement) => logement.id === id);

  return (
    <div>
      <h1>Page de logement</h1>
      <p>Identifiant du logement : {id}</p>
      <Slider pictures={logement.pictures}/>
        <section className='container_collapse'>
          <div className="collapse">
        <Collapse title={"description"} content={logement.description}/>
        </div>
        </section>

    </div>
    
  );
}

export default LogementSingle;
