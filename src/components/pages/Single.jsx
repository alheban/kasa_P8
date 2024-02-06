import { useParams } from 'react-router-dom';

function Single() {
  // Utilisez useParams() pour obtenir les paramètres de l'URL
  const { id } = useParams();

  return (
    <div>
      <h1>Page de logement</h1>
      <p>Identifiant du logement : {id}</p>
      {/* Utilisez la valeur de "id" comme bon vous semble */}
    </div>
  );
}

export default Single;
