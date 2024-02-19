import React,{useContext } from 'react';
import Card from "../card/Card";
import { DataContext } from '../hooks/useContext.jsx';


function Gallery() {  
  const { dataLogement } = useContext(DataContext);

  const listItems = dataLogement.map(({id,cover,title}) => (
    <Card  
    key={id} 
    cover={cover}
    id={id}
    title={title}
    alt={title}>
    </Card> 

  ));

  return (
    
    <div className="cards">
      <ul className="cardList">{listItems}</ul>
    </div>
  );
}
export default React.memo(Gallery);


