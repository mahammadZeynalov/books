import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Book(props) {
    const {name, author, price, short_description} = props.data
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Author: {author}
                </Card.Text>
                <Card.Text>
                    {short_description}
                </Card.Text>
                <Card.Text>
                    Price: {price}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button variant="info">Delete</Button>
            </Card.Body>
        </Card>
    )
}
