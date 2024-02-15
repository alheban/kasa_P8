import React from "react";
import { Link } from "react-router-dom";

const Card = React.memo(({ title, cover, id }) => {
  return (
    <li>
    <Link to={`/kasa_P8/logement/${id}`} key={id}>
      <div key={id} className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
    </li>
  );
});

export default Card;
