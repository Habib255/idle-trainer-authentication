import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, type, price } = service
    return (
        <div>
            <Card style={{ width: '18rem', padding: "10px" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {type}
                    </Card.Text>
                    <h5>{price}</h5>
                    <Button variant="primary">checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;