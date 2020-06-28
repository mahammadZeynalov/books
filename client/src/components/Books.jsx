import React, { useState, useEffect } from 'react';
// import getBooksQuery from '../queries/queries';
// import addBookSub from '../queries/subscriptions'
import Book from './Book';
import ModalAdd from './ModalAdd';

export default function Books({ loading, error, data, subscribeToNewBooks }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        subscribeToNewBooks();
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) {
        console.log(error);
        return <div>Error</div>
    }
    return (
        <div className='books_container'>
            {
                data.books.map((book, index) => <Book key={index} data={book} />)
            }
            <div>
                <button className='btn btn-primary' onClick={handleShow}>Add new book</button>
            </div>
            <ModalAdd show={show} handleClose={handleClose} />
        </div>
    )
}
