import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FormAdd from './FormAdd';

export default function ModalBook({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormAdd />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}
