import React, { useState } from "react";
import { StateComp } from "./";

export default function EmployeeStateComp() {
  const [empState, setEmpState] = useState([
    { id: 1, label: "ADDED", activeClass: "secondary", isActive: true },
    { id: 2, label: "IN-CHECK", activeClass: "warning", isActive: false },
    { id: 3, label: "APPROVED", activeClass: "primary", isActive: false  },
    { id: 4, label: "ACTIVE", activeClass: "success" , isActive: false },
    { id: 5, label: "INACTIVE", activeClass: "danger" , isActive: false },
  ]);

  return (
    <ul class="list-group list-group-horizontal-lg justify-content-end">
      {empState.map((status, index) => (
        <StateComp key={index} status={status} />
      ))}
    </ul>
  );
}
