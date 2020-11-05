import React, { useContext } from "react";
import { StateComp } from "./";
import { EmployeesCtx } from "../context/context";
import { editEmployee } from "../context/actions";
import {editEmployeeFn} from '../api'

export default function EmployeeStateComp({employee}) {
  const {dispatchEmployeesArray} = useContext(EmployeesCtx)

  let empState = [
    { id: 1, label: "ADDED", activeClass: 'btn-secondary'},
    { id: 2, label: "CHECK", activeClass: 'btn-warning'},
    { id: 3, label: "APPROVED",activeClass: 'btn-success'},
    { id: 4, label: "ACTIVE", activeClass: 'btn-primary'},
    { id: 5, label: "INACTIVE", activeClass: 'btn-danger'},
  ];


  /// change state logic
  const onChangeState = (id) => {
    let updatedEmployee = {
      ...employee,
      stateID: id
    }
    editEmployeeFn(updatedEmployee).then(data => 
      dispatchEmployeesArray(editEmployee(data.id, {
        stateID: data.stateID
      }))
      )
  };

  return (
    <ul className="list-group list-group-horizontal-sm justify-content-end">
      {empState.map((status, index) => (
        <StateComp key={index} status={status} activeId = {employee.stateID} onChangeState={onChangeState}/>
      ))}
    </ul>
  );
}
