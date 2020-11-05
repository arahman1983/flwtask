import React from 'react';
import {EmployeeStateComp} from './'

export default function EmployeeElement ({employee}) {
  /// get all employees id, name, stateID
  
  return(
    <li className="list-group-item">
      <div className="row justify-content-between py-2">
        <div className="col-md-4 col-sm-6 py-2">
          <p className="mb-0">{employee.name}</p>
        </div>
        <div className="col-md-8 col-sm-6">
            <EmployeeStateComp employee = {employee} />
        </div>
      </div>
    </li>
  )
}