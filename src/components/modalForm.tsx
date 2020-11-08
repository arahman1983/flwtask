import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { EmployeesCtx } from "../context/context";
import { addEmployee } from "../context/actions";
import { addEmployeeFn } from "../api";
import { Employee } from '../context/reducer';

export default function FormModal(props: any) {
  const [employeeName, setEmployeeName] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const { dispatchEmployeesArray } = useContext(EmployeesCtx);

  const handleClose = () => {
    setEmployeeName("");
    props.handleHide();
  };

  const employeeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    addEmployeeFn(employee).then((data) => {
      let newEmployee: Employee = {
        id: data.id,
        name: employeeName,
        stateID: 1,
      }


      dispatchEmployeesArray(
        addEmployee(newEmployee)
      )
    }
    );

    setEmployeeName("");
    props.handleHide();
  };

  return (
    <Modal show={props.show} onHide={handleClose} animation={false}>
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
