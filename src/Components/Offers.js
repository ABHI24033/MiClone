import React from 'react';
import Offer from './Offer';
import "../css/Offers.css"
const Offers = (offers) => {
    function aaaa(){
        console.log(offers)
    }
    aaaa();
  return (
    <div className='offer_section'>
      {
        offers.offers.map((item,index)=>(
            <Offer key={index} src={item.image} link={item.url} index={index}/>
        ))
       } 
    </div>
  );
}

export default Offers;
