import React from 'react';
import "../css/ProductReviewCard.css"
function ProductReviewCard({name,image,review,price,index}) {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index} review`}/>
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  );
}

export default ProductReviewCard;
