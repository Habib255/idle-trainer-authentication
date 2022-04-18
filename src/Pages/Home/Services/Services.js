import React from 'react';
import img1 from '../../../img-service/g1.jpg'
import img2 from '../../../img-service/g2.jpg'
import img3 from '../../../img-service/g3.jpg'
import img8 from '../../../img-service/g8.jpg'
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = [
        {
            name: "level 1",
            id: 11,
            type: " get advise and online live support/class only",
            img: img1,
            price: "350 / per - month"
        },
        {
            name: "level 2",
            id: 12,
            type: "live practice with trainer at morning and evening",
            img: img2,
            price: "$750 / per - month"
        },
        {
            name: "level pro",
            id: 13,
            type: "live practice at morning & evening and online support and advise 24/7",
            img: img3,
            price: "$1000 / per - month"
        },
        {
            name: "Healthy meal pro",
            id: 14,
            type: "live practice at morning & evening and online support and advise 24/7",
            img: img8,
            price: "+ 200 with level 2 and level pro / per - month"
        }
    ]



    return (
        <div id='services'>
            <h2 className='text-center service-header'>Have a look to Our Services</h2>
            <div className="services"> {services.map(service => <Service key={service.id} service={service}></Service>)}</div>
        </div>
    );
};

export default Services;