import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, cover, id }) => {
  return (
    <Link to={`/logement/${id}`} key={id}>
      <li key={id} className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </li>
    </Link>
  );
};

export default Card;
