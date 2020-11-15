import React, { useReducer, useEffect } from "react";
import { FlwHeader } from "./components";
import { EmployeePage } from "./pages";
import { EmployeesCtx } from "./context/context";
import { getAllEmployees } from "./api";
import employeeReducer from "./context/reducer";
import { setEmployees } from "./context/actions";

function App() {
  const [EmployeesArray, dispatchEmployeesArray] = useReducer(employeeReducer, []);

  useEffect(() => {
    getAllEmployees().then((data) => dispatchEmployeesArray(setEmployees(data)));
  }, []);

  return (
    <div className="row py-md-5 mx-0 bg-light h-100">
      <EmployeesCtx.Provider value={{ EmployeesArray, dispatchEmployeesArray }}>
        <div className="col-lg-8 col-md-10 col-12 mx-auto">
          <FlwHeader />
          <div className="w-100 h-100 bg-white p-3">
            <EmployeePage />
          </div>
        </div>
      </EmployeesCtx.Provider>
    </div>
  );
}

export default App;
