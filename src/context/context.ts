import { Action, Employee } from './reducer';
import { createContext } from "react";

type Ctx = {
  EmployeesArray:Employee[] , 
  dispatchEmployeesArray: React.Dispatch<Action>
}

export const EmployeesCtx = createContext<Ctx>({EmployeesArray:[], dispatchEmployeesArray:()=>null});
