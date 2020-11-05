import React, {useState} from 'react';
import {FormModal} from './'

export default function FlwHeader() {
  const [show, setShow] = useState(false)
  const handelShow = () => setShow(true)
  const handleHide = () => setShow(false)
  return(
    <div className="w-100 py-4 px-5 bg-dark d-flex justify-content-between">
      <div>
        <h2 className="text-white">Employees List</h2>
      </div>
      <button className="btn btn-light" onClick={handelShow}>
        Add Employee
      </button>
      <FormModal show={show}  handleHide= {handleHide}/>

    </div>
  )
}