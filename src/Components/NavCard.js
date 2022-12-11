import React from 'react';
import "../css/NavCard.css"
function NavCard({name,image,index,price}) {
  return (
    <div className='navCard'>
      <img src={image} alt={`${index} item`}/>
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default NavCard;
