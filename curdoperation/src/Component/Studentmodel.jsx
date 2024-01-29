import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Studentmodel({ isOpen }) {
  if (!isOpen) return null;
  return (
    <div>
      <Modal.Dialog>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Studentmodel;
