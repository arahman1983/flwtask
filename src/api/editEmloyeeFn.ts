import {Employee} from '../context/reducer'
export default async function editEmployeeFn (employee: Employee){
  try {
    let response = await fetch(`http://localhost:3004/employees/${employee.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    let data = await response.json()
    console.log(data)
    return data
    //return data
  } catch (error) {
      console.log(error.message)
  }
}