export default async function addEmployeeFn (employee){
  try {
    let response = await fetch('http://localhost:3004/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
  
      body: JSON.stringify(employee)
    });
    let data = await response.json()
    return data
    //return data
  } catch (error) {
      console.log(error.message)
  }
}