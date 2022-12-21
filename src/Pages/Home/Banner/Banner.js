import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'
const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Let's Explore My Store</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Different Types  of Shoes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-auto"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Varities of Shoes
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
