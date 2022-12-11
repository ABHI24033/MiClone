import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
 function Sliders(start) {
    
  return (
    // <></>
    // {data}
    <Carousel fade>
        {
            start.start.map((item,index)=>{
                return(
                   <Carousel.Item key={index}>
                    <img className='d-block w-100' src={item} alt="first slide"/>
                </Carousel.Item> 
                )               
            })
        }
    </Carousel>
  );
}
export default Sliders;