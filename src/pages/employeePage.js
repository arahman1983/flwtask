import React from 'react';
import {EmployeeElement} from '../components'

export default function EmployeePage() {
  
  return(
    <ul className="list-group list-group-flush">
          <EmployeeElement />
          <EmployeeElement />
          <EmployeeElement />
          <EmployeeElement />
    </ul>
  )
}