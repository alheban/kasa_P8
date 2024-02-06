import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "./../../assets/arrow.png"

const Collapse = ({title,content}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

    return <>
      <div className="container" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={arrow}className={ toggle ? 'arrow_down': "arrow_up"}></img>
      </div>
      <div className={toggle ? 'container__description' : 'container__description_hidden'}>
        <p>{content}</p>
      </div>
    </>
}


export default Collapse;
