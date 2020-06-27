import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormBook from './FormBook';

export default function ModalAdd({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormBook />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}
