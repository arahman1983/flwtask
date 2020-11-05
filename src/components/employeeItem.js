import React from 'react';
import {EmployeeStateComp} from './'

export default function EmployeeElement () {
  return(
    <li class="list-group-item">
      <div className="row justify-content-between">
        <div className="col-md-4 col-sm-6 my-3 py-2">
          <p>Employee Name</p>
        </div>
        <div className="col-md-8 col-sm-6 my-3">
            <EmployeeStateComp/>
        </div>
      </div>
    </li>
  )
}