import React, {useState} from "react";
import {Modal} from 'react-bootstrap'

export default function FormModal ({handleHide, show}) {
  const [employeeName, setEmployeeName] = useState('')
  const handleClose = () => {
    setEmployeeName('')
    handleHide();
  }
  const employeeNameChange = (e) => setEmployeeName(e.target.value)
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>MAdd Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <input className="form-control" type="text" value={employeeName} onChange={employeeNameChange} placeholder="Add Employees Full Name" />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
