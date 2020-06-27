import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_BOOKS_QUERY } from '../queries';
import Book from './Book';
import ModalAdd from './ModalAdd';

export default function Books() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { loading, error, data } = useQuery(GET_BOOKS_QUERY)

    if (loading) return <div>Loading...</div>
    if (error) {
        console.log(error);
        return <div>Error</div>
    }
    console.log(data);
    return (
        <div className='books_container'>
            {
                data.books.map(book => <Book key={book.id} data={book}></Book>)
            }
            <div>
                <button className='btn btn-primary' onClick={handleShow}>Add new book</button>
            </div>
            <ModalAdd show={show} handleClose={handleClose} />
        </div>
    )
}
