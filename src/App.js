import React from 'react'
import {FlwHeader} from './components'
import {EmployeePage} from './pages'

function App() {
  return (
    <div className="row mx-0 bg-light h-100">
      <div className="col-md-8 col-12 mx-auto">
        <FlwHeader />
        <div className="w-100 h-100 bg-white p-3">
          <EmployeePage />
        </div>
      </div>
    </div>
  );
}

export default App;
