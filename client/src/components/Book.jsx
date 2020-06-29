import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useMutation } from 'react-apollo';
import { DELETE_BOOK_MUTATION } from '../queries/mutations';

export default function Book(props) {

    const { id, name, author, price, short_description, photo } = props.data
    const [deleteBook] = useMutation(DELETE_BOOK_MUTATION)

    const handleDeleteBook = () => {
        deleteBook({
            variables: {
                id
            }
        })
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div className='book_img'>
                    <Card.Img variant="top" src={photo} className='book_img' />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className='font-weight-bold'>Author:</span>: {author}
                    </Card.Text>
                    <Card.Text>
                        {short_description}
                    </Card.Text>
                    <Card.Text>
                        <span className='font-weight-bold'>Price:</span>  {price}
                    </Card.Text>
                    <div className='btns_card'>
                        {/* <Button variant="primary">Edit</Button> */}
                        <Button variant="info" onClick={handleDeleteBook}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
