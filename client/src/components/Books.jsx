import React, { useState } from 'react';
import getBooksQuery from '../queries/queries';
import addBookSub from '../queries/subscriptions'
import Book from './Book';
import ModalAdd from './ModalAdd';

export default function Books() {
    addBookSub();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { loading, error, data } = getBooksQuery();

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
