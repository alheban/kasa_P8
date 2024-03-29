import React, { useState } from "react";
import arrow from "./../../assets/arrow.png"

const Collapse = ({title,content}) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

    return <>

      <div className="collapse_title" onClick={handleToggle}>
        <h2>{title}</h2>
        <img src={arrow}className={ toggle ? 'arrow arrow_down': "arrow arrow_up"}></img>
      </div>
      <div className={toggle ? 'collapse_description_down collapse_description' : ' collapse_description collapse_description_hidden'}>
        <div className="collapse_description_p">{content}</div>
      </div>
    </>
}


export default Collapse;
