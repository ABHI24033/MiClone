import React from 'react';
import "../css/Starproducts.css"
function Starproducts({starProduct}) {
  return (
    <div className='star_products'>
      <div>
        <a href={starProduct[0].url}>
            <img src={starProduct[0].image} alt="no"/>
        </a>
      </div>
      <div>
      <a href={starProduct[1].url}>
            <img src={starProduct[1].image} alt="no"/>
        </a>
        <a href={starProduct[2].url}>
            <img src={starProduct[2].image} alt="no"/>
        </a>
        <a href={starProduct[3].url}>
            <img src={starProduct[3].image} alt="no"/>
        </a>
      </div>
    </div>
  );
}

export default Starproducts;
