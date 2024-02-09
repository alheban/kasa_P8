import React from "react";
import data from "/public/data.json";
import Card from "../card/Card";


function Gallery() {  
  const listItems = data.map(({id,cover,title}) => (
    <Card  
    key={id} 
    cover={cover}
    id={id}
    title={title}>
    </Card> 

  ));

  return (
    
    <div className="cards">
      <ul className="cardList">{listItems}</ul>
    </div>
  );
}
export default Gallery;


