import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { EmployeesCtx } from "../context/context";
import { addEmployee } from "../context/actions";
import { addEmployeeFn } from "../api";

export default function FormModal({ handleHide, show }) {
  const [employeeName, setEmployeeName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const { EmployeesArray, dispatchEmployeesArray } = useContext(EmployeesCtx);

  const handleClose = () => {
    setEmployeeName("");
    handleHide();
  };

  const employeeNameChange = (e) => {
    setNameValid(true);
    setEmployeeName(e.target.value);
  };

  const validateUser = () => {
    if (employeeName.trim().length === 0) {
      setNameValid(false);
      return;
    }
    ///// logic to add employee to the
    let employee = { name: employeeName, stateID: 1 } 
    addEmployeeFn(employee).then((data) =>
      dispatchEmployeesArray(
        addEmployee({
          id: data.id,
          name: employeeName,
          stateID: 1,
        })
      )
    );

    setEmployeeName("");
    handleHide();
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input className="form-control" type="text" value={employeeName} onChange={employeeNameChange} placeholder="Add Employees Full Name" />
        <div className={`alert alert-danger ${nameValid && "d-none"} my-3`} role="alert">
          You must add Employee Name
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={validateUser}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
