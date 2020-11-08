import React, {useContext} from 'react';
import {EmployeeElement, NoData} from '../components'
import { EmployeesCtx } from "../context/context";
import { Employee } from '../context/reducer';


export default function EmployeePage() {
  const { EmployeesArray } = useContext(EmployeesCtx);
  
  return(
    <ul className="list-group list-group-flush">
      {
        EmployeesArray.length > 0 ?
        EmployeesArray.map((employee:Employee, i:any) => <EmployeeElement key={i} employee={employee} />)
        : <NoData />
      }
    </ul>
  )
}