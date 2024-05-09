import React from 'react';
import CardItem from '../CardItem/CardItem';

const Card = ({ items }) => {
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"center"}}>
      {items.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Card;
