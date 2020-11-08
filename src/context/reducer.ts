export interface Employee {
  id: Number,
  name: String,
  stateID: Number
}


export interface Action {
  type: String,
  employee?: Employee,
  id?: Number,
  employees?: Employee[]
}

const employeeReducer = (state: Employee[] = [], action :Action ) : any[]| undefined => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [...state, action.employee];
    case "CHANGE_EMPLOYEE_STATE":
      return state.map((employee:Employee) => {
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