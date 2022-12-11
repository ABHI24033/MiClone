import React from 'react';
import "../css/HotItemCard.css"
function HotItemCard({name,price,image,index}) {
  return (
    <div className='HotItemCard'>
      <img src={image} alt={`${index} Products`}/>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default HotItemCard;
