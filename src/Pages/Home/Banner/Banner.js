import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../img-banner/anastase-maragos-HyvE5SiKMUs-unsplash.jpg'
import img2 from '../../../img-banner/luis-vidal-FodEsaNZs48-unsplash.jpg'
import img3 from '../../../img-banner/victor-freitas-nlZTjUZX2qo-unsplash.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='carousel'><Carousel>
            <Carousel.Item interval={800}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='bg-dark'>Don't wish for it, Work for it</h3>
                    <p>Forget failure. Forget Mistakes. Forget Everything, except what you’re going to do now. And do it.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Winners find a way, Losers Find an Excuse</h3>
                    <p>Winners do what they fear..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Blood, Sweat & Respect. First two you give, Last one you Earn.</h3>
                    <p>The real workout starts when you want to stop.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </div>
    );
};

export default Banner;