import React from 'react';
import {EmployeeStateComp} from '.'

export default function EmployeeElement (props:any) {  
  return(
    <li className="list-group-item">
      <div className="row justify-content-between py-2">
        <div className="col-md-4  py-2">
          <p className="mb-0">{props.employee.name}</p>
        </div>
        <div className="col-md-8 ">
            <EmployeeStateComp employee = {props.employee} />
        </div>
      </div>
    </li>
  )
}