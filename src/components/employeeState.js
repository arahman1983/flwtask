import React, { useState } from "react";
import { StateComp } from "./";

export default function EmployeeStateComp() {

  let empState = [
    { id: 1, label: "ADDED", activeClass: 'btn-secondary'},
    { id: 2, label: "IN-CHECK", activeClass: 'btn-warning'},
    { id: 3, label: "APPROVED",activeClass: 'btn-success'},
    { id: 4, label: "ACTIVE", activeClass: 'btn-primary'},
    { id: 5, label: "INACTIVE", activeClass: 'btn-danger'},
  ];

  const [activeId, setActiveId] = useState(1);

  /// change state logic
  const onChangeState = (id) => setActiveId(id);

  return (
    <ul className="list-group list-group-horizontal-lg justify-content-end">
      {empState.map((status, index) => (
        <StateComp key={index} status={status} activeId = {activeId} onChangeState={onChangeState}/>
      ))}
    </ul>
  );
}
