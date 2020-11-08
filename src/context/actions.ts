import { Employee } from './reducer';
export const addEmployee = (employee:Object) => ({
  type: "ADD_EMPLOYEE",
  employee,
});

export const editEmployee = (id:Number, employee:Object) => ({
  type: "CHANGE_EMPLOYEE_STATE",
  id,
  employee,
});


export const setEmployees = (employees:Employee[]) => ({
  type: "SET_EMPLOYEES",
  employees,
});
