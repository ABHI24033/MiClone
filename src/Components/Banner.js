import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
function Banner({ banner }) {
    return (
        <div className='Banner'>
            
                <Carousel fade>
                    {
                        banner.end.map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img className='d-block w-100' src={item.image} alt="first slide" />
                                    <Carousel.Caption>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p>{item.source}</p>
                                        <u>Read more</u>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            

        </div>
    );
}

export default Banner;
