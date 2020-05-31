import React from "react";
import "./TopicDetailsModal.css";
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default function TopicDetailsModal({ topic, description,...props }) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Study {topic}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{topic}</h4>
        <p>{description}</p>

      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
