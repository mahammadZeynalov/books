import React, { useState, useEffect } from 'react';
import Book from './Book';
import ModalAdd from './AddBook/ModalAdd';

export default function Books({ loading, error, data, subscribeToNewBooks, subscribeAfterBookDeleted }) {
    useEffect(() => {
        subscribeToNewBooks();
        subscribeAfterBookDeleted();
    }, []);

    const [showAdd, setShowAdd] = useState(false);
    console.log(showAdd);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    if (loading) return <div>Loading...</div>
    if (error) {
        console.log(error);
        return <div>Error</div>
    }
    return (
        <div className='books_container'>
            {
                data.books.map(book => <Book key={book.id} data={book}/>)
            }
            <div className = 'btn_add'>
                <button className='btn btn-primary' onClick={handleShowAdd}>Add new book</button>
            </div>
            <ModalAdd show = {showAdd} handleClose ={handleCloseAdd}/>
        </div>
    )
}
