import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='d-flex justify-content-center '>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Hi I'm Habib</Card.Title>

                    <Card.Text>
                        I have set my dream to be a web developer in next one year. for this reason I am trying my level best to learning web delvelopment from programming hero. though I am slow but I hope I will reach my goal very soon.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default About;