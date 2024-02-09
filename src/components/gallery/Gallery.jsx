import React from "react";
// import products from "/public/data.json";
import Card from "../card/Card";
import { useFtech } from "../hooks/useFetch";

function Gallery() {
  const { loading, data, errors } = useFtech('/src/data/data.json');
  if (!data) return <p>Loading...</p>
  console.log("loading:", loading);
  console.log("data:", data);
  console.log("error:", errors);
  
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


