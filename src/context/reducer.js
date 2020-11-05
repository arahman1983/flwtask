const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.employee];
    case "CHANGE_EMPLOYEE_STATE":
      return state.map(employee => {
        if(employee.id === action.id){
          return {
            ...employee,
            ...action.employee
          }
        }else{
          return employee;
        }
      });
    case "SET_EMPLOYEES":
      return action.employees;
    default:
      return state;
  }
};

export default employeeReducer;