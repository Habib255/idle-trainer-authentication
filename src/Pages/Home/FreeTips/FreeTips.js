
import React from 'react'
import img1 from '../../../img-speciality/1785 (1).jpg'
import img2 from '../../../img-speciality/437 (1).jpg'
import img3 from '../../../img-speciality/5899735 (1).jpg'
import img4 from '../../../img-speciality/meal-planning-food-arrangement (1).jpg'
import FreeTip from '../FreeTip/FreeTip'
const freeTips = [
    {
        title: 'practice at morning',
        id: 1,
        img: img1,
        text: 'more you practice more you go nearby your aim ',
    },
    {
        title: 'practice at evening',
        img: img2,
        id: 2,
        text: 'no pain no gain ',
    },
    {
        title: 'keep yourself motivated',
        img: img3,
        id: 3,
        text: 'you have to stay motivated to ensure your goal ',
    },
    {
        title: 'have a balance diet',
        img: img4,
        id: 4,
        text: 'balanced meal is another element to keep you feet after gym',
    }
]

const FreeTips = () => {
    return (
        <div>
            <h2 className='text-center mb-5 mt-5'>Some valuable tips and advices </h2>
            <div className="services">
                {freeTips.map(freetip => <FreeTip key={freetip.id} freetip={freetip}></FreeTip>)}
            </div>
        </div>
    );
};
export default FreeTips;

