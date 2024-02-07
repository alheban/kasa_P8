import React from 'react';
import { useParams } from 'react-router-dom';
import products from "/public/data.json";


function LogementSingle() {
// Utilisez useParams() pour obtenir les paramètres de l'URL
const {id} = useParams();
// Afficher les données du tableau products dans la console
console.log("Données du tableau products :", products);
const logement = products.find((logement) => logement.id === id);
console.log("Identifiant du logement :", id);
console.log("Données du logement trouvé :", logement);

  return (
    <div>
      <h1>Page de logement</h1>
      <p>Identifiant du logement : {id}</p>
      {/* Utilisez la valeur de "id" comme bon vous semble */}
    </div>
    
  );
}

export default LogementSingle;
