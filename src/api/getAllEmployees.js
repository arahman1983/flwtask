export default async function getAllEmployees (){
  try {
    let response = await fetch('http://localhost:3004/employees');
    let data = await response.json()
    return data
  } catch (error) {
      console.log(error.message)
  }
}