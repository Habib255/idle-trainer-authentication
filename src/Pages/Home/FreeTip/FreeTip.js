import React from 'react';
import { Card } from 'react-bootstrap';

const FreeTip = ({ freetip }) => {
    const { img, text, title } = freetip
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FreeTip;