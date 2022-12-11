import React from 'react';
import ProductReviewCard from "./ProductReviewCard.js"
import "../css/ProductReview.css"
function ProductReview({ProductReview}) {
  return (
    <div className='ProductReview'> 
      {ProductReview.map((item,index)=>(<>
            <ProductReviewCard key={index} image={item.image} review={item.review} name={item.name} price={item.price} index={index}/>
      </>))}
    </div>
  );
}

export default ProductReview;
