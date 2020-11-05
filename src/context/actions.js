export const addEmployee = (employee) => ({
  type: "ADD_EMPLOYEE",
  employee,
});

export const editEmployee = (id, employee) => ({
  type: "CHANGE_EMPLOYEE_STATE",
  id,
  employee,
});


export const setEmployees = (employees) => ({
  type: "SET_EMPLOYEES",
  employees,
});
