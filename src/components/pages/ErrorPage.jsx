import { Link, useRouteError} from "react-router-dom";



export default function ErrorPage() {
const error = useRouteError();

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/kasa_P8/">Retourner sur la page d’accueil</Link>
      {/*<p>
        <i>{error.statusText || error.message}</i>
      </p>*/}
    </div>

  );

  
}
